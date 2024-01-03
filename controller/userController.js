
const users=require('../Models/useSchema')


exports.addUser=async(req,res)=>{
    console.log(req.file);
    console.log("inside add user function");
    const{fname,lname,email,mobile,gender,status,location}=req.body

    try{
        const preuser=await users.findOne({email})
        if(preuser){
            res.status(406).json("user already exists")
        }
        else{
            const newuser=new users({
                fname,lname,email,mobile,gender,status,profile:req.file.filename,location
            })
            await newuser.save()
            res.status(200).json(newuser)
        }
    }catch(err){
        res.status(401).json("Error:"+err)
    }
}

// get user

exports.getallUsers=async(req,res)=>{

    


   try {
    const allusers=await users.find()
    res.status(200).json(allusers)
    }catch(err){
        res.status(401).json(err)
    }
   
}

exports.deleteUser=async(req,res)=>{
    // req id get
    const   {id}  = req.params
    try{
        const removeData=await users.findByIdAndDelete({_id:id})
        res.status(200).json(removeData)

    }catch(err){
        res.status(401).json(err)
    }
}


  
