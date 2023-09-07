//const http = require('http')
//require is similar to import of include in other languages
const express = require('express')//require express module


/*const fs = require('fs')
const homePage = fs.readFileSync('index.html')
const aboutPage = fs.readFileSync('about.html')
const contactPage = fs.readFileSync('contact.html')
const notFoundPage = fs.readFileSync('notFound.html')
*/



const app = express() // calls express function to start new Express app

//in order to get the correct system path to a file, we need:
const path = require('path')


app.use(express.static('public'))
//special function call to tell express where to look for assets

//and now use it to server up a html page
app.get('/about',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'about.html'))
})//end of arrow function and get call

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'index.html'))
})//end of arrow function and get call

app.get('/contact',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'contact.html'))
})//end of arrow function and get call



//add the express method to define a GET response
//creating different responses to different urls is called routing
//unlike the unwieldy if-then clauses used in our single createServer call
//with express we can refactor into many small handler functions
app.get('/name',(req,res)=>{
    res.json({
        name:'Greg Lim'
    })//end of json

})//end of arrow function and get function call


/* with the createServer function, the arrow function contained within that call had the logic for different responses in if-else statements
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
})//end of arrow function, call to createServer
*/



app.listen(3000, ()=>{

    //add a simple console log to show the app is working
    console.log("App is listening to port 3000")

})//end of arrow function and listen call
//server.listen(3000)