import http from 'http'

const server = http.createServer((req,res)=>{
    console.log('Our server is stablished successfully');
    const date = new Date();
    console.log('Last time server hitt',date.toLocaleTimeString())
    res.end('Thank you for url request');
});


const port = 5000;
server.listen(port, ()=>{
    console.log(`Serveris running on port : ${port}`)
})