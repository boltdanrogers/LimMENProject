const http = require('http')
//require is similar to import of include in other languages
const fs = require('fs')
const homePage = fs.readFileSync('index.html')
const aboutPage = fs.readFileSync('about.html')
const contactPage = fs.readFileSync('contact.html')
const notFoundPage = fs.readFileSync('notFound.html')



const server = http.createServer((req,res)=>{
    console.log(req.url)
    
    if(req.url ==='/about')
        res.end(aboutPage)
    else if (req.url === '/contact')
        res.end(contactPage)
    else if(req.url == '/home')
        res.end(homePage)
    else{
        res.writeHead(404)
        res.end(notFoundPage)
    }//end of else
   
   
    
   //res.end('Hello Node.js')
})//end of arrow function

server.listen(3000)