const express=require('express')
const fs=require('fs')


const app=express()


// middleware
app.use(express.json())


// get request
app.get('/',(req,res)=>{
    res.send('Home Page')
})

//  perform crud operation

// post user data
// create 
app.post('/add/user',(req, res)=>{
    // steps
  //1. Read the complete db.json
  let data =JSON.parse(fs.readFileSync("./db.json",'utf-8'))
  console.log(data);
  //2. Add the data into users array
  data.users.push(req.body)
//   console.log(data);
  //3. Write/append the complete data to db.json
  fs.writeFileSync('./db.json' ,JSON.stringify(data))
  res.send("New user has been added")


})

// post blog data

app.post('/add/blog',(req, res)=>{
    // steps
  //1. Read the complete db.json
  let data =JSON.parse(fs.readFileSync("./db.json",'utf-8'))
  console.log(data);
  //2. Add the data into users array
  data.blogs.push(req.body)
//   console.log(data);
  //3. Write/append the complete data to db.json
  fs.writeFileSync('./db.json' ,JSON.stringify(data))
  res.send("New blog has been added")

})

// -----------------------------------------------

// READ
app.get('/users',(req, res)=>{
    // 1. Read the file
    let data =JSON.parse(fs.readFileSync("./db.json",'utf-8'))

    // 2. Send the relevent response
    res.send(data.users)
})

app.get('/blogs',(req, res)=>{
    // 1. Read the file
    let data =JSON.parse(fs.readFileSync("./db.json",'utf-8'))

    // 2. Send the relevent response
    res.send(data.blogs)
})

//------------------------------------------------------


// UPDATE
app.patch('/update/user',(req,res)=>{
    //1. Read the complete file
  let data =JSON.parse(fs.readFileSync("./db.json",'utf-8'))

    //2. Filter out what you want to update
    //3. update it with the data from req.body
    //4. write the complete data into db.json
})


app.listen(8080,()=>{
    console.log('Server running at port 8080');
})