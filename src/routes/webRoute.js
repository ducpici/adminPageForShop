import express from 'express'
import {getHomePage,getCustomersPage} from '../controllers/homeControllers'
const router = express.Router()

router.get('/', getHomePage)

router.get('/customers', getCustomersPage)

export default router