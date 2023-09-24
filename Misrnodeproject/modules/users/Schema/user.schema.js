const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    
        name:{type:String,required:true},
        age:{type:Number,required:true},
        email:{type:String,required:true},
        password:{type:String,required:true},
        departname:{type:String,required:true},
        nationalid:{type:String,required:true},
        isDeleted:{type:Boolean,default:false},

},
{
 timestamps:true,
}
);

module.exports=userSchema;
