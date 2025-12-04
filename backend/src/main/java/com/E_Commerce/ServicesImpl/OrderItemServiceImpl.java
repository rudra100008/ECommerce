package com.E_Commerce.ServicesImpl;

import com.E_Commerce.DTO.OrderItemDTO;
import com.E_Commerce.Entity.Inventory;
import com.E_Commerce.Entity.Order;
import com.E_Commerce.Entity.OrderItem;
import com.E_Commerce.Entity.Product;
import com.E_Commerce.Exception.InsufficientStockException;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Mapper.OrderItemMapper;
import com.E_Commerce.Repository.InventoryRepository;
import com.E_Commerce.Repository.OrderItemRepository;
import com.E_Commerce.Repository.OrderRepository;
import com.E_Commerce.Repository.ProductRepository;
import com.E_Commerce.Services.OrderItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OrderItemServiceImpl implements OrderItemService {
    private final OrderItemRepository orderItemRepository;
    private final OrderItemMapper orderItemMapper;
    private final ProductRepository productRepository;
    private final OrderRepository orderRepository;
    private final InventoryRepository inventoryRepository;

    @Override
    @Transactional
    public List<OrderItemDTO> addOrderItemDTOs(List<OrderItemDTO> orderItemDTOList) {
      List<OrderItem> savedOrderItem = saveOrderItem(orderItemDTOList);
      return this.orderItemMapper.toOrderItemDTOs(savedOrderItem);
    }

    @Override
    @Transactional
    public List<OrderItem> addOrderItems(List<OrderItemDTO> orderItemDTOList) {
        return saveOrderItem(orderItemDTOList);
    }


    private List<OrderItem> saveOrderItem(List<OrderItemDTO> dtos){
        Order order = getOrder(dtos.getFirst().getOrderId());
        Map<Integer,Product> productMap = getProductMap(dtos);
        checkStockAvailability(dtos,productMap);
        updateInventory(dtos,productMap);
        List<OrderItem> orderItems = dtos.stream()
                .map(orderItemDTO -> createOrderItem(orderItemDTO,order,productMap))
                .collect(Collectors.toList());
        return this.orderItemRepository.saveAll(orderItems);
    }

    private Map<Integer, Product> getProductMap(List<OrderItemDTO> dtos){
        validateOrderItemDTOs(dtos);
        Set<Integer> productIds = dtos.stream()
                .map(OrderItemDTO::getProductId)
                .filter(Objects::nonNull)
                .collect(Collectors.toSet());

        List<Product> productList = this.productRepository.findAllById(productIds);
        if(productList.size() != productIds.size()){
            throw new ResourceNotFoundException("One or more not found");
        }

        return productList.stream()
                .collect(Collectors.toMap(Product::getProductId, Function.identity()));
    }

    private OrderItem createOrderItem(OrderItemDTO orderItemDTO,Order order,Map<Integer,Product> productMap){
        Product product = productMap.get(orderItemDTO.getProductId());
        if (product == null) {
            throw new ResourceNotFoundException("Product not found: " + orderItemDTO.getProductId());
        }


        Double subTotal = orderItemDTO.getSubTotal();
        if(subTotal == null){
            Double price = orderItemDTO.getPriceAtPurchase() != null ?
                    orderItemDTO.getPriceAtPurchase() : product.getPrice();
            Double discount = orderItemDTO.getDiscountAtPurchase() != null ?
                    orderItemDTO.getDiscountAtPurchase() : product.getDiscount();

            subTotal = (price - (discount != null ? discount : 0.0))*orderItemDTO.getQuantity();
        }
        OrderItem orderItem = this.orderItemMapper.toOrderItem(orderItemDTO);
        orderItem.setProduct(product);
        orderItem.setOrder(order);
        orderItem.setSubTotal(subTotal);

        if(orderItem.getPriceAtPurchase() == null){
            orderItem.setPriceAtPurchase(product.getPrice());
        }
        if (orderItem.getDiscountAtPurchase() == null){
            orderItem.setDiscountAtPurchase(product.getDiscount());
        }

        return orderItem;


    }

    private void validateOrderItemDTOs(List<OrderItemDTO> dtos){
        if(dtos == null || dtos.isEmpty()){
            throw new IllegalArgumentException("Order item list is empty.");
        }

        Integer firstOrderId = dtos.getFirst().getOrderId();
        boolean sameOrderId = dtos.stream()
                .map(OrderItemDTO::getOrderId)
                .allMatch(orderId-> orderId != null && orderId.equals(firstOrderId));
        if(!sameOrderId){
            throw new IllegalStateException("All order items must have same order");
        }
        dtos.forEach(this::validateOrderItemDTO);
    }

    private void validateOrderItemDTO(OrderItemDTO dto){
        if (dto.getProductId() == null){
            throw new IllegalArgumentException("Product ID is required");
        }
        if (dto.getQuantity() == null || dto.getQuantity() <= 0) {
            throw new IllegalArgumentException("Quantity must be greater than 0");
        }
    }

    private void checkStockAvailability(List<OrderItemDTO> orderItemDTOS,Map<Integer,Product> productMap){
        for (OrderItemDTO orderItemDTO:orderItemDTOS){
            Product product = productMap.get(orderItemDTO.getProductId());
            Inventory inventory = this.inventoryRepository.findByProduct(product)
                    .orElseThrow(()-> new ResourceNotFoundException("Product not found."));
            if(Boolean.FALSE.equals(inventory.isInStock())){
                throw new InsufficientStockException("Product  not in stock.");
            }
            if(inventory.getAvailableQuantity() < orderItemDTO.getQuantity()){
                throw new InsufficientStockException(
                        "Insufficient stock for " + product.getProductName() +
                                ". Available: " + inventory.getAvailableQuantity() +
                                ", Requested: " + orderItemDTO.getQuantity());
            }

        }
    }

    private void updateInventory(List<OrderItemDTO> orderItemDTOS,Map<Integer,Product> productMap){
        for (OrderItemDTO orderItemDTO:orderItemDTOS){
            Product product = productMap.get(orderItemDTO.getProductId());
            Inventory inventory = this.inventoryRepository.findByProduct(product)
                    .orElseThrow(() -> new ResourceNotFoundException(
                            "Inventory not found for product: " + product.getProductName()));
            Integer newQuantity = inventory.getAvailableQuantity() - orderItemDTO.getQuantity();
            if(newQuantity < 0){
                product.setIsActive(false);
                throw new InsufficientStockException(
                        "Stock update failed for " + product.getProductName());
            }
            inventory.setStockQuantity(newQuantity);
            product.setIsActive(true);
            this.inventoryRepository.save(inventory);
        }
    }
    private Order getOrder(int orderId){
        return this.orderRepository.findById(orderId)
                .orElseThrow(()-> new ResourceNotFoundException("Order cannot be processed."));
    }


}
