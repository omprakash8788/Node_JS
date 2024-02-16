// what should be my first steps
const mongoose = require("mongoose");

// coonection to the db
const main = async () => {
  try {
    // logic to connect the DB
    const connection = await mongoose.connect(
      "mongodb://localhost:27017/learningMongoose"
    );
    console.log("connected to the DB");
    // i want to insert document in  DB
    await userModel.insertMany([
      { name: "om", age: 25, city: "Mumbai" },
      { name: "ram", age: 12, city: "Ayodya" },
    ]);
    console.log("inseted the data");
  } catch (error) {
    console.log("cannot connect to the db");
    console.log(error);
  }
};
main();

//  if i want add something in db
// 1. Schema <== 2. Model  <== 3. Document

//1. create a schema
const useSchema = mongoose.Schema({
  name: String,
  age: Number,
  city: String,
});
// 2.Model ,  Note - user is a collection name , learningMongoose is a databasename
// on url
const userModel = mongoose.model("user", useSchema);
