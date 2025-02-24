import express from 'express'
import router from './src/routes/webRoute.js'
import setViewEngine from './src/configs/viewEngine.js'
const app = express()

app.use(express.static('./src/public/'))
setViewEngine(app)
app.use(router)

export default app