// to load .env file 

require('dotenv').config()


//   import  mongoose mongo db node connection file

require('./DB-connection/connection')

// import  express server 

const express=require('express')

// import router

const router=require('./Routes/router')


// import cors 

const cors=require('cors')

// create express server 

const emsServer=express()

// use cors in server 
emsServer.use(cors())

// parse json to object 

emsServer.use(express.json())

// use router in server

emsServer.use(router)

// customize port for server 

const PORT=4000||process.env.PORT

// to run server app use listen 

emsServer.listen(PORT,()=>{
    console.log(`ems server started at port :${PORT}`);
})


// resolve request to local host 4000 

emsServer.get('/',(req,res)=>{
    res.send(`<h1> ems server started and waiting for request !!!!!!!! </h1>`)
})











