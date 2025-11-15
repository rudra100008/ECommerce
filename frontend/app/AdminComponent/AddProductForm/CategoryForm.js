'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '../../CSS/adminNavbar/AddProductForm/categoryForm.module.css'
import { faArrowLeft, faArrowRight, faTag } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import { addCategory } from '../../services/adminServices/ProductCategoryServices';
import { useEffect, useState } from 'react';
import { fetchAllCategories } from '../../services/CategoryService';
import { addProduct } from '../../services/adminServices/ProductServices';
export default function CategoryForm({ setState, formData, updateFormData }) {
    const [validationError, setValidationError] = useState({
        name: ''
    });
    const [pageNumbers, setPageNumbers] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [categories, setCategories] = useState([]);
    const [pageInfo, setPageInfo] = useState({
        lastPage: false,
        pageNumber: 0,
        pageSize: 5,
        totalElement: 0,
        totalPage: 0,
    })
    const router = useRouter();


   const handleNext = async (e) => {
    e.preventDefault();
    try {
        const cleanCategoryData = {
            name: formData.category.name
        };
        console.log("FormData",formData)
        
        setState('product');
    } catch (error) {
        console.error("Failed to create category:", error);
    }
}

    const handleCancel = () => {
        router.push("/admin")
        updateFormData({
            category: {
                 categoryId:'',
                 name: '' 
                },
            product: {
                productName: '',
                description: '',
                price: '',
                discount: '',
                sku: '',
                stockQuantity: ''
            },
            images: []

        })
    }

    const fetchCategories = async (pageNumber, pageSize) => {
        console.log("PagNumber: ", pageNumber);
        const res = await fetchAllCategories(pageNumber, pageSize);
        console.log("CategoryForm: ", res.data);
        const { data } = res.data;
        console.log("Data in fetchCategories(): ", data)
        setCategories(data)
        setPageInfo({
            lastPage: res.data.lastPage,
            pageNumber: res.data.pageNumber,
            pageSize: res.data.pageSize,
            totalElement: res.data.totalElement,
            totalPage: res.data.totalPage,
        })
        setCurrentPage(res.data.pageNumber);
        if (res.data.totalPage > 0) {
            const numbers = []
            for (let i = 1; i <= res.data.totalPage; i++) {
                numbers.push(i);
            }
            setPageNumbers(numbers)
        }
    }

    const handleCategoryItemClick = (category) => {
        console.log("Selected category:", category);
        
        const currentCategoryName = typeof formData.category === 'string'
            ? ''
            : formData.category.name || '';

        if (currentCategoryName !== category?.name) {
            updateFormData({
                category: {
                    categoryId: category.categoryId,
                    name: category.name
                }
            })
        } else {
            updateFormData({
                category: {
                    categoryId: '',
                    name: ''
                }
            })
        }
    }

    useEffect(() => {
        fetchCategories(0, 5)
    }, [])

    const handleNextPage = () => {
        if (pageInfo.lastPage) return;
        const newPage = pageInfo.pageNumber + 1;
        fetchCategories(newPage, pageInfo.pageSize)
    }
    const handlePreviousPage = () => {
        if (currentPage <= 0) return;
        const prevPage = pageInfo.pageNumber - 1;
        fetchCategories(prevPage, pageInfo.pageSize)
    }

    // in here pageNumer is different in server pageNumber starts from 0 and here it display from 1 so pageNumber must be decreased by 1
    const handlePageChange = (displayPageNumber) => {
        const serverPageNumber = displayPageNumber - 1;
        console.log("DisplaypageNumber: ", displayPageNumber, "ServerPageNumber: ", serverPageNumber);
        if (serverPageNumber >= 0 && serverPageNumber < pageInfo.totalPage) {
            setCurrentPage(serverPageNumber);
            fetchCategories(serverPageNumber, pageInfo.pageSize);
        }
    }

    useEffect(() => {
    console.log("Updated formData.category:", formData.category);
}, [formData.category]);

    const displayCurrentPage = currentPage + 1;
    return (
        <div className={style.categoryForm}>
            <div className={style.title}>
                <h3>Category</h3>
            </div>
            <div className={style.inputGroup}>
                <label className={style.label} htmlFor='categoryName'>Category</label>
                <div className={style.inputWrapper}>
                    <FontAwesomeIcon icon={faTag} className={style.tagIcon} />
                    <input
                        className={style.textInput}
                        type='text'
                        name='categoryName'
                        id='categoryName'
                        value={formData.category.name}
                        onChange={(e) => updateFormData({
                            category: { ...formData.category, name: e.target.value }
                        })}
                        placeholder='Enter category of product'
                    />
                </div>
                <span className={style.validationError}>{validationError.name}</span>
            </div>

            <div className={style.ButtonGroup}>
                <button
                    type='button'
                    onClick={handleCancel}
                    className={style.backButton} >
                    <FontAwesomeIcon icon={faArrowLeft} />
                    Cancel
                </button>
                <button
                    type='button'
                    className={style.nextButton}
                    onClick={handleNext}
                >
                    Next
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>

            <div className={style.category}>
                <h3> You can choose category from here</h3>
                <div className={style.categoryList}>
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className={`${style.categoryItem} ${formData.category.name === category.name ? style.selected : ''}`}
                            onClick={() => handleCategoryItemClick(category)}>
                            {category.name}
                        </div>
                    ))}
                </div>
                <div className={style.page}>
                    <div className={style.pageNumberList}>
                        <div
                            className={`${style.pageNumberItem} ${style.nav}`}
                            onClick={handlePreviousPage}
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </div>
                        {pageNumbers && pageNumbers.map((pageNumber, index) => (
                            <div
                                key={index}
                                className={`${style.pageNumberItem} ${pageNumber === displayCurrentPage ? style.active : ''}`}
                                onClick={() => handlePageChange(pageNumber)}
                            >
                                {pageNumber}
                            </div>
                        ))}
                        <div
                            className={`${style.pageNumberItem} ${style.nav}`}
                            onClick={handleNextPage}
                        >
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}