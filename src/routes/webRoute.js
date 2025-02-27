import express from 'express'
import {getHomePage,getCustomersPage} from '../controllers/homeControllers'
import {getAddCustomerPage,postCreateCustomer,getEditCustomerPage,postDeleteCustomer} from '../controllers/customerControllers'
import upload from '../middlewares/multerConfig'
const router = express.Router()

router.get('/', getHomePage)
router.get('/customers', getCustomersPage)
router.get('/add-customer', getAddCustomerPage)
router.post('/create-customer', upload.single("avatar"), postCreateCustomer)
router.get('/edit-customer/:id', getEditCustomerPage)
router.get('/delete-customer/:id', postDeleteCustomer)

export default router