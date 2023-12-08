const multer=require('multer')



// to store uploading content into a file in server using multer

const storage=multer.diskStorage({
    destination:(req,file,callbaclk)=>{
        callbaclk(null,'./uploads')
    },
    filename:(req,file,callbaclk)=>{
    let filename=`Image-${Date.now()}-${file.originalname}`
     callbaclk(null,filename)
    }
})

const filefilter=(req,file,callback)=>{
    if(file.mimetype==="image/png"||file.mimetype==="image/jpg"||file.mimetype==="image/jpeg"){
        callback(null,true)
    }
    else{
        callback(null,false)
        return callback(new Error("only .png , .jpg,.jpeg files are allowed"))
    }
}

const multerConfig=multer({
    storage,
    filefilter
})

module.exports=multerConfig