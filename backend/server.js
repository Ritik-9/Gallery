const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']); // Forces Google & Cloudflare DNS
require('dotenv').config()
const app=require('./src/app.js')
const connectDB=require('./src/db/db.js')

connectDB()

app.listen(3000,()=>{
    console.log("server started")
})