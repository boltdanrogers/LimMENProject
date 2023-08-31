const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url ==='/about')
        res.end('The about page')
    else if (req.url === '/contact')
        res.end('The contact page')
    else if(req.url == '/home')
        res.end('The home page')
    else{
        res.writeHead(404)
        res.end('Page Note Found')
    }//end of else
   
   
    //console.log(req.url)
   //res.end('Hello Node.js')
})//end of arrow function

server.listen(3000)