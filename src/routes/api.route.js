import express from 'express'
import {loggedin} from '../middlewares/auth.middleware'
import {postCreateOrder} from '../controllers/orderControllers'
const api_router = express.Router()

api_router.post('/api/save-invoice', loggedin, postCreateOrder)

export default api_router