import app from './app.js'
import { configDotenv } from 'dotenv'

configDotenv()

const port = process.env.PORT

const server = app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})