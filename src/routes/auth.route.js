import express from 'express'
import {loggedin,isAuth} from '../middlewares/auth.middleware'
import {getLoginPage,checkLogin,logout} from '../controllers/loginControllers'
const auth_router = express.Router()

auth_router.get('/login',isAuth, getLoginPage)
auth_router.post('/login', checkLogin)
auth_router.get('/logout',loggedin, logout)

export default auth_router