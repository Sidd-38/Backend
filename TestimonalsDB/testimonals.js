import express from 'express'
import { getTestimonals, getTestimonal, createTestimonal } from './database.js'

const test = express()

test.use(express.json())

test.get("/test", async(req,res)=>{
    const tests = await getTestimonals()
    res.send(tests)
})

test.get("/test/:uid", async (req,res)=>{
    const uid = req.params.uid
    const t = await getTestimonal(uid)
    res.send(t)
})

test.post("/test", async(req,res)=>{
    const {uid,star,review} = req.body
    const create = await createTestimonal(uid,star,review)
    res.status(201).send(create)
})

test.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('Broke')
})

test.listen(8080, ()=>{
    console.log('Server is running on port 8080')
})