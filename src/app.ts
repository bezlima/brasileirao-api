import express from 'express'
import { Request, Response } from 'express'

const PORT = 8000
const tableRoute = require('./routes/route.ts')
const cors = require('cors')
const app = express()

let corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}

app.use(express.json())
app.use(cors(corsOptions))
app.use(tableRoute)

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'hello world with Typescript' })
})

app.listen(PORT, () => `server running on port ${PORT}`)
