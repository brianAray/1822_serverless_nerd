const {PutObjectCommand, GetObjectCommand, S3Client} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const client = new S3Client({});
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json({ limit: '1000kb' }));

app.post("/upload", async (req, res) => {
    const {file_name, mime, data} = req.body.image;

    // convert the base64 string into a buffer
    const buffer = Buffer.from(data, 'base64');

    const file_ext = mime.split("/")[1];
    
    try{
        const bucketName = "new-bucket-name-1234";
        const objectName = `photos/${file_name}_${Date.now()}.${file_ext}`
        const response = await uploadImageToBucket(bucketName, objectName, mime, buffer);
        const presignedUrl = await getPreSignedUrl(bucketName, objectName);

        res.send({response, presignedUrl});
    }catch(error){
        console.error(error);
        res.send({error});
    }

})

async function uploadImageToBucket(Bucket, Key, mime, buffer){
    const command = new PutObjectCommand({
        Bucket,
        Key,
        Body: buffer,
        ContentType: mime,
        ContentEncoding: 'base64'
    })

    try{
        const response = await client.send(command);
        return response;
    }catch(err){
        console.error(err);
    }
}

async function getPreSignedUrl(Bucket, Key){
    const command = new GetObjectCommand({Bucket, Key});
    return getSignedUrl(client, command, {expiresIn: 3600});
}


app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
})