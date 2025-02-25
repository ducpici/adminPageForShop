import express from 'express'
import {getHomePage,getCustomersPage} from '../controllers/homeControllers'
import {getAddCustomerPage,postCreateCustomer,getEditCustomerPage} from '../controllers/customerControllers'
const router = express.Router()

router.get('/', getHomePage)
router.get('/customers', getCustomersPage)
router.get('/add-customer', getAddCustomerPage)
router.post('/create-customer', postCreateCustomer)
router.get('/edit-customer/:id', getEditCustomerPage)

export default router