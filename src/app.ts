import cors from "cors";
import { Application, Request, Response } from "express"

const express = require('express')
const app: Application = express()

app.use(cors());

// parser

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req:Request, res:Response) => {
  res.send('working sucessfully!')
})

export default app;