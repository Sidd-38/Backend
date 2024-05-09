import express from 'express'
import { getQueries, getQuery, createQuery } from './database.js'

const query = express()

query.use(express.json())

query.get("/query", async(req,res)=>{
    const queries = await getQueries()
    res.send(queries)
})

query.get("/query/:uid", async (req,res)=>{
    const uid = req.params.uid
    const qu = await getQuery(uid)
    res.send(qu)
})

query.post("/query", async(req,res)=>{
    const {uid,pid,pname,tech,type_,status_} = req.body
    const create = await createQuery(uid,pid,pname,tech,type_,status_)
    res.status(201).send(create)
})

query.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('Broke')
})

query.listen(8080, ()=>{
    console.log('Server is running on port 8080')
})