import express from 'express'
import { chats } from './db/chats.js';
import dotenv from 'dotenv'

const app = express();
dotenv.config()

app.get('/api/chat', (req,res) => {
    res.send(chats)
})

app.get('/api/chat/:id',(req,res) => {
    let singleChat = chats.find(chat => chat._id === req.params.id)
    res.send(singleChat)
})

const PORT = process.env.PORT || 8080


app.listen(8080,console.log(`started port on ${PORT}`))