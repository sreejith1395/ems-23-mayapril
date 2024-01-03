const express=require('express')

const usercontroller=require('../controller/userController')
const multerConfig=require('../middleware/multermiddleware')

const router=new express.Router()

router.post('/add',multerConfig.single("profile"),usercontroller.addUser)

router.get('/get-all-users',usercontroller.getallUsers)

router.delete('/delete-user/:id',usercontroller.deleteUser)


module.exports=router