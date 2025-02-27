import express from 'express'
import router from './src/routes/webRoute.js'
import setViewEngine from './src/configs/viewEngine.js'
import {checkConnection} from './src/configs/database.js'

const app = express()

app.use(express.static('./src/public/'))

//config req.body
app.use(express.urlencoded({extended: true}))
app.use(express.json())

setViewEngine(app)
app.use(router)

export default app