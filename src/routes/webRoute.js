import express from 'express'
import {loggedin} from '../middlewares/auth.middleware'
import {getHomePage,getCustomersPage} from '../controllers/homeControllers'
import {getAddCustomerPage,postCreateCustomer,getEditCustomerPage,postUpdateCustomer,postDeleteCustomer} from '../controllers/customerControllers'
import {getUsersPage,getAddUserPage,postCreateUser,getEditUserPage,postUpdateUser,postDeleteUser} from '../controllers/userControllers'
import {getProductsPage,getAddProductPage,postCreateProduct,getEditProductPage,postUpdateProduct,postDeleteProduct} from '../controllers/productControllers'
import {getOrdersPage} from '../controllers/orderControllers'
import {getDetailOrderPage} from '../controllers/order_detailControllers'
import {getBrandsPage,getAddBrandPage,postCreateBrand,getEditBrandPage,postUpdateBrand,postDeleteBrand} from '../controllers/brandControllers'
import {getProductTypesPage,getAddProductTypePage,postCreateProductType,getEditProductTypePage,postUpdateProductType,postDeleteProductType} from '../controllers/productTypeControllers'
import {getInvoicePage} from '../controllers/invoiceControllers'
import upload from '../middlewares/multerConfig'
const router = express.Router()

router.get('/',loggedin, getHomePage)
router.get('/customers',loggedin, getCustomersPage)
router.get('/add-customer',loggedin, getAddCustomerPage)
router.post('/create-customer',loggedin, postCreateCustomer)
router.get('/edit-customer/:id',loggedin, getEditCustomerPage)
router.post('/update-customer/:id', loggedin, postUpdateCustomer)
router.get('/delete-customer/:id',loggedin, postDeleteCustomer)

router.get('/users',loggedin, getUsersPage)
router.get('/add-user',loggedin, getAddUserPage)
router.post('/create-user',loggedin, upload.single("avatar"), postCreateUser)
router.get('/edit-user/:id',loggedin, getEditUserPage)
router.post('/update-user/:id', loggedin, upload.single("avatar"), postUpdateUser)
router.get('/delete-user/:id',loggedin, postDeleteUser)

router.get('/orders',loggedin, getOrdersPage)

router.get('/order-detail/:id',loggedin, getDetailOrderPage)

router.get('/products',loggedin, getProductsPage)
router.get('/add-product', loggedin, getAddProductPage)
router.post('/create-product', loggedin, postCreateProduct)
router.get('/edit-product/:id', loggedin, getEditProductPage)
router.post('/update-product/:id', loggedin, postUpdateProduct)
router.get('/delete-product/:id', loggedin, postDeleteProduct)

router.get('/brands',loggedin, getBrandsPage)
router.get('/add-brand',loggedin, getAddBrandPage)
router.post('/create-brand',loggedin, postCreateBrand)
router.get('/edit-brand/:id',loggedin, getEditBrandPage)
router.post('/edit-brand/update-brand/:id',loggedin, postUpdateBrand)
router.get('/delete-brand/:id',loggedin, postDeleteBrand)

router.get('/product_types',loggedin, getProductTypesPage)
router.get('/add-product_type',loggedin, getAddProductTypePage)
router.post('/create-product_type',loggedin, postCreateProductType)
router.get('/edit-product_type/:id',loggedin, getEditProductTypePage)
router.post('/edit-product_type/update-product_type/:id',loggedin, postUpdateProductType)
router.get('/delete-product_type/:id',loggedin, postDeleteProductType)

router.get('/lap-hoa-don', loggedin, getInvoicePage)
export default router