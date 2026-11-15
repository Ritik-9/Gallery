const ImageKit=require('@imagekit/nodejs')

const imgKit= new ImageKit({
    privateKey: process.env.ImageKit_Private_Key
})
async function uploadFile(buffer){
    const result=await imgKit.files.upload({
        file:buffer.toString('base64'),
        fileName:"vanitas.jpg"
    })
    return result
}
module.exports=uploadFile