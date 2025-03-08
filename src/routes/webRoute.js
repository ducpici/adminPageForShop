import express from 'express'
import {getHomePage,getCustomersPage} from '../controllers/homeControllers'
import {getAddCustomerPage,postCreateCustomer,getEditCustomerPage,postDeleteCustomer} from '../controllers/customerControllers'
import {getUsersPage,getAddUserPage} from '../controllers/userControllers'
import {getProductsPage} from '../controllers/productControllers'
import {getOrdersPage} from '../controllers/orderControllers'
import {getBrandsPage,getAddBrandPage,postCreateBrand,getEditBrandPage,postUpdateBrand,postDeleteBrand} from '../controllers/brandControllers'
import {getProductTypesPage,getAddProductTypePage,postCreateProductType,getEditProductTypePage,postUpdateProductType,postDeleteProductType} from '../controllers/productTypeControllers'
import upload from '../middlewares/multerConfig'
const router = express.Router()

router.get('/', getHomePage)
router.get('/customers', getCustomersPage)
router.get('/add-customer', getAddCustomerPage)
router.post('/create-customer', upload.single("avatar"), postCreateCustomer)
router.get('/edit-customer/:id', getEditCustomerPage)
router.get('/delete-customer/:id', postDeleteCustomer)

router.get('/users', getUsersPage)
router.get('/add-user', getAddUserPage)

router.get('/orders', getOrdersPage)

router.get('/products', getProductsPage)

router.get('/brands', getBrandsPage)
router.get('/add-brand', getAddBrandPage)
router.post('/create-brand', postCreateBrand)
router.get('/edit-brand/:id', getEditBrandPage)
router.post('/edit-brand/update-brand/:id', postUpdateBrand)
router.get('/delete-brand/:id', postDeleteBrand)

router.get('/product_types', getProductTypesPage)
router.get('/add-product_type', getAddProductTypePage)
router.post('/create-product_type', postCreateProductType)
router.get('/edit-product_type/:id', getEditProductTypePage)
router.post('/edit-product_type/update-product_type/:id', postUpdateProductType)
router.get('/delete-product_type/:id', postDeleteProductType)
export default router