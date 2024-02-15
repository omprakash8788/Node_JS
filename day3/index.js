const http=require('http')
const fs=require('fs')


const server=http.createServer((req,res)=>{
    // logic for server(api)
    if(req.url=='/'){
        res.end('This is the home page')
    }
    else if(req.url=='/about'){
        res.end("This is the about page")
    }
    else if(req.url=='/contacts'){
        res.end('connect with me')
    }
    else if(req.url=='/data'){
        // res.end('....')
        fs.readFile('./data.json','utf-8', (err, data)=>{
            if(err){
                res.end(err)
            }
            else{
                res.end(data)
            }
        })
    }
})
server.listen(4500, ()=>{
    console.log('Server is running at port 4500');
})