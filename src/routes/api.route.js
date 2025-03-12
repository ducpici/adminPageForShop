import express from 'express'
import {loggedin} from '../middlewares/auth.middleware'
import {postCreateOrder} from '../controllers/orderControllers'
import {getCustomers} from '../api/getCustomers'
const api_router = express.Router()

api_router.post('/api/save-invoice', loggedin, postCreateOrder)

api_router.post('/api/customers', loggedin, getCustomers)

export default api_router