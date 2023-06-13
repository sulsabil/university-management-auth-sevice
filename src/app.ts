import cors from 'cors'
import { Application, Request, Response } from 'express'
import express from 'express'

const app: Application = express()

app.use(cors())

// parser

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.send('working successfully!')
})

export default app
