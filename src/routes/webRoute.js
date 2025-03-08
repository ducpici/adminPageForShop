import express from 'express'
import {loggedin} from '../middlewares/auth.middleware'
import {getHomePage,getCustomersPage} from '../controllers/homeControllers'
import {getAddCustomerPage,postCreateCustomer,getEditCustomerPage,postDeleteCustomer} from '../controllers/customerControllers'
import {getUsersPage,getAddUserPage} from '../controllers/userControllers'
import {getProductsPage} from '../controllers/productControllers'
import {getOrdersPage} from '../controllers/orderControllers'
import {getBrandsPage,getAddBrandPage,postCreateBrand,getEditBrandPage,postUpdateBrand,postDeleteBrand} from '../controllers/brandControllers'
import {getProductTypesPage,getAddProductTypePage,postCreateProductType,getEditProductTypePage,postUpdateProductType,postDeleteProductType} from '../controllers/productTypeControllers'
import upload from '../middlewares/multerConfig'
const router = express.Router()

router.get('/',loggedin, getHomePage)
router.get('/customers',loggedin, getCustomersPage)
router.get('/add-customer',loggedin, getAddCustomerPage)
router.post('/create-customer',loggedin, upload.single("avatar"), postCreateCustomer)
router.get('/edit-customer/:id',loggedin, getEditCustomerPage)
router.get('/delete-customer/:id',loggedin, postDeleteCustomer)

router.get('/users',loggedin, getUsersPage)
router.get('/add-user',loggedin, getAddUserPage)

router.get('/orders',loggedin, getOrdersPage)

router.get('/products',loggedin, getProductsPage)

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

export default router