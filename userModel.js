const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    "FirstName":{type:String,
    require:true},
    "Gender":{type:String,
        require:true},
     "MobileNumber":{type:Number,
        require:true},
    "Email":{type:String,
        require:true},
    "Password":{type:String,
        require:true, minlength: 5},
    "ConfirmPassword":{type:String,
        require:true, minlength: 5,
        equalTo: "#Password"}
})

module.exports=mongoose.model("users",userSchema)

