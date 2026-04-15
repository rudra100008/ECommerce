package com.E_Commerce.Repository;

import com.E_Commerce.Entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Integer> {
        @Query("SELECT r from Reservation r WHERE r.user.userId =:id")
        List<Reservation> findByUserId(@Param("id") Integer userId);

        @Query("SELECT r FROM Reservation r WHERE r.user.userId =:userId AND r.inventory.id =:inventoryId ")
        Reservation findByUserIdAndInventoryId(@Param("userId") Integer userId,
                        @Param("inventoryId") Integer inventoryId);

        @Query("SELECT r FROM Reservation r WHERE r.user.userId = :userId " +
                        "AND r.inventory.product.productId = :productId " +
                        "AND r.status = 'ACTIVE' " +
                        "AND r.expiresAt > :now ")
        Reservation findActiveReservationByUserAndProduct(
                        @Param("userId") Integer userId,
                        @Param("productId") Integer productId,
                        @Param("now") LocalDateTime now);

        @Query("SELECT r FROM Reservation r WHERE r.user.userId = :userId " +
                        "AND r.inventory.product.productId IN :productIds " +
                        "AND r.status = com.E_Commerce.Enum.ReservationStatus.ACTIVE " +
                        "AND r.expiresAt >:now")
        List<Reservation> findActiveReservations(
                        @Param("userId") Integer userId,
                        @Param("productIds") List<Integer> productIds,
                        @Param("now") LocalDateTime now);

        @Query("SELECT r FROM Reservation r WHERE r.user.userId = :userId " +
                        "AND r.inventory.product.productId IN :productIds " +
                        "AND r.status = com.E_Commerce.Enum.ReservationStatus.ACTIVE " +
                        "AND r.expiresAt <:now")
        List<Reservation> finActiveReservationsExpired(
                        @Param("userId") Integer userId,
                        @Param("productIds") List<Integer> productIds,
                        @Param("now") LocalDateTime now);

        @Query("SELECT r FROM Reservation r WHERE r.user.userId =:userId " +
                        "AND r.inventory.product.productId =:productId " +
                        "AND r.status = 'CONVERTED_TO_ORDER' " +
                        "AND r.expiresAt > :now ")
        Reservation findConvertedToOrderReservationByUserAndProduct(
                        @Param("userId") Integer userId,
                        @Param("productId") Integer productId,
                        @Param("now") LocalDateTime now);

        @Query("SELECT COALESCE(SUM(r.reservedQuantity),0) FROM Reservation r " +
                        "WHERE  r.inventory.product.productId = :productId " +
                        "AND r.status = com.E_Commerce.Enum.ReservationStatus.ACTIVE " +
                        "AND r.expiresAt >:now")
        int getReservedQuantityByProductId(@Param("productId") Integer productId, @Param("now") LocalDateTime now);


        // fetch reservedQuantity by inventoryId which are active and is not expired
        @Query("SELECT COALESCE(SUM(r.reservedQuantity),0) FROM Reservation r " +
                        "WHERE  r.inventory.id = :inventoryId " +
                        "AND r.status = com.E_Commerce.Enum.ReservationStatus.ACTIVE " +
                        "AND r.expiresAt >:now")
        int getReservedQuantityByInventoryId(@Param("inventoryId") Integer inventoryId,
                        @Param("now") LocalDateTime now);

        // ReservationRepository
        @Query("SELECT r FROM Reservation r WHERE r.status = 'ACTIVE' AND r.expiresAt < :now")
        List<Reservation> findExpiredActiveReservations(@Param("now") LocalDateTime now);

        @Modifying(flushAutomatically = true,clearAutomatically = true)
        @Query("""
                            INSERT INTO reservations (user_id, inventory_id, reserved_quantity, reserved_at, expires_at, status)
                            VALUES (:userId, :inventoryId, :quantity, :now, :expires, 'ACTIVE')
                            ON CONFLICT (user_id, inventory_id, status) DO UPDATE
                            SET reserved_quantity = reservations.reserved_quantity + :quantity,
                                expires_at = :expires
                        """)
        void upsertReservation(@Param("userId") Integer userId, @Param("inventoryId") Integer inventoryId,
                        @Param("quantity") int quantity, @Param("now") LocalDateTime now,
                        @Param("expires") LocalDateTime expires);
}
