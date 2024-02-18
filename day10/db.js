const mongoose=require("mongoose")

const connection= mongoose.connect("mongodb+srv://omprakash:kumar@cluster0.futdyqt.mongodb.net/nodejs?retryWrites=true&w=majority")


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

// create a super hero Schema
const superSchema=mongoose.Schema({
    name:{type:String,require:true},
    city:{type:String, require:true}
},{
    versionKey:false
})

// create a Model
const HeroModel=mongoose.model("hero",superSchema)


module.exports={
    connection,
    UserModel,
    HeroModel
}