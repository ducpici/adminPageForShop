import express from 'express'
import router from './src/routes/webRoute.js'
import session from 'express-session'
const flash = require("express-flash");
import auth_router from './src/routes/auth.route.js'
import api_router from './src/routes/api.route.js'
import setViewEngine from './src/configs/viewEngine.js'

const app = express()

app.use(express.static('./src/public/'))

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
}))
app.use(flash())
//config req.body
app.use(express.urlencoded({extended: true}))
app.use(express.json())

setViewEngine(app)
app.use(router)
app.use(auth_router)
app.use(api_router)


export default app