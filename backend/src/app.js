const express= require('express')
const postModel=require('./models/note.model.js')
const multer = require('multer')
const uploadFile=require('./services/storage.service.js')
const cors= require('cors')

const app=express()
app.use(cors())
app.use(express.json())

const upload= multer({storage:multer.memoryStorage()})

app.post('/create-post',upload.single("img"),async (req,res)=>{
    
    const result=await uploadFile(req.file.buffer)
    const post= await postModel.create({
        img: result.url,
        caption:req.body.caption
    })
    return res.status(201).json({
        message:"Post Created Successfully",
        post
    })
})

app.get('/posts',async(req,res)=>{
    const posts= await postModel.find()

    return res.status(201).json({
        message:"Post Fetched",
        posts
    })
})

module.exports=app