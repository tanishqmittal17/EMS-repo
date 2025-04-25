import express from 'express'
import cors from'cors'
import connectToDatabase from './db/db.js'
import dotenv from 'dotenv'

dotenv.config()

const app=express()
app.use(cors())
app.use(express.json())
connectToDatabase()

app.listen(process.env.PORT,() => {
    console.log(`Server is Running on port ${process.env.PORT}`)
    console.log(`connected to database`)
})


