const mongoose=require("mongoose")

const connection= mongoose.connect("mongodb://localhost:27017/expressDB")


// create userSchema
const userSchema=mongoose.Schema({
    name:{type:String,require:true},
    age:{type:Number, require:true},
    is_married:{type:String, require:true},
    city:{type:String, require:true}
},{
    versionKey:false
})

// create a Model
const UserModel=mongoose.model("user",userSchema)


module.exports={
    connection,
    UserModel
}