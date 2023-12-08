// import mongoose

const mongoose=require('mongoose')

const connectionString=process.env.DATABASE

mongoose.connect(connectionString,{

    useUnifiedTopology: true,
    useNewUrlParser: true

}).then((data)=>{
    console.log("mogodb atlas cooected to ems server!!");
}).catch((err)=>{
    console.log("mongodb connection failed");
})