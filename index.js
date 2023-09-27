const express = require('express')//require express for server
const path = require('path')//require path for getting specific path to files
const app = new express()//create a new express server
app.use(express.static('public'))//identify the public folder location for assets

app.listen(4000,()=>{
    console.log('App is listening on port 4000')
})//end of app.listen call, setting port 4000 and writing a preliminary console message

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/index.html'))//respond with index.html
})//end of get / url

app.get('/about',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/about.html'))//respond with about.html
})//end of get /about url

app.get('/contact',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/contact.html'))//respond with contact.html
})//end of get /contact url

app.get('/post',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/post.html'))//respond with post.html
})//end of get /post url

