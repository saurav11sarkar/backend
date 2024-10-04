import express from 'express';
import path from 'path'
const app  = express();

// ------CRUD-----
// create = post
// read = get
// update = put/pash
// delete = delete

// app.get('/', (req,res)=>{
//     console.log('This is home route');
//     res.send("This your response");
// })

app.get('/product', (req,res)=>{
    res.json({product:[
        {title:"Iphone", price:20000},
        {title:"Oneplus", price:29000},
    ]})
})

const product =[
    {title:"Iphone", price:20000},
    {title:"Oneplus", price:29000},
    {title:"sony", price:29300},
]
app.get('/',(req,res)=>{
    // res.end('jha se aya ho uhi wepas laut ja beta')
    // res.send("<h1>This is you are respons</h1>")
    // res.json({product})
    // console.log(path.resolve())
    const dir = path.resolve();
    const url = path.join(dir,'./index.html')
    res.sendFile(url)
    // res.sendFile('./index.html')
})

const port = 5000;
app.listen(port,()=>console.log(`Express server is running PORT: ${port}`))