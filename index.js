// const http=require('http')


// const server=http.createServer((req, res)=>{
    
//     res.end("hello world")
// })




// server.listen(8000, ()=>{
//     console.log("server is running on port 8000")
// })





const express= require('express')
const bodyParser= require('body-parser')
const path=require("path")


const app=express()



//middleware
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.use(express.static(path.join(__dirname, "public")));


const PORT=8000


app.get('/', (req, res)=>{
    res.json({
        name: "John Doe",
        age: 30,
    })
})



app.post('/addData', (req, res)=>{
    console.log(req.body)

    res.status(201).json({
        message: "Data added successfully",
        success:true

    })
})




app.listen(PORT, ()=>{
    console.log("server is listening...")
})





