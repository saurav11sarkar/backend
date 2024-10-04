import http from 'http'

const server = http.createServer((req,res)=>{
    // console.log('Server is hitt by some on')
    // console.log(req.url)
    // res.end('Thankyou hitteng server')
    if(req.url === '/superman'){
        res.end('You are belong form DC')
    }else{
        res.end("Your are belong from marvel")
    }
})

const port = 5000;
server.listen(port, ()=>console.log(`Server is running on port ${port}`));