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

app.use(express.static('public'))

app.use(express.json())
app.use(cors(corsOptions))
app.use(tableRoute)

app.set('view engine', 'ejs')
app.get('/', (req: Request, res: Response) => {
    res.sendFile(__dirname + '/public/home.html')
})

app.listen(PORT, () => console.log(`server running on port http://localhost:${PORT}`))
