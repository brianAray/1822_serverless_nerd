const { CreateBucketCommand, DeleteBucketCommand, PutObjectCommand, S3Client, GetObjectCommand} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const fs = require('fs');

const { readFile } = require("node:fs/promises");

const client = new S3Client({});

const bucketName = "new-bucket-name-1234";

async function createBucket(Bucket){
    const command = new CreateBucketCommand({
        // The name of the bucket are unique and have several other constraints
        Bucket
    });

    try{
        const { Location } = await client.send(command);
        console.log(`Bucket created with location ${Location}`);
    }catch(err){
        console.error(err);
    }
}

async function deleteBucket(Bucket){
    const command = new DeleteBucketCommand({
        Bucket
    });

    try{
        const response = await client.send(command);
        console.log(response);
    }catch(err){
        console.error(err);
    }
}

// createBucket(bucketName);
// deleteBucket(bucketName);

async function uploadObjectToBucket(Bucket, Key, filePath){
    const command = new PutObjectCommand({
        Bucket,
        Key,
        Body: await readFile(filePath)
    })

    try{
        const response = await client.send(command);
        console.log(response);
    }catch(err){
        console.error(err);
    }
}

// uploadObjectToBucket(bucketName, "photos/cat.png", "./cat.png");


async function getPreSignedUrl(Bucket, Key){
    const command = new GetObjectCommand({Bucket, Key});
    return getSignedUrl(client, command, {expiresIn: 3600});
}

getPreSignedUrl(bucketName, "photos/cat.png")
    .then(response => console.log(response))
    .catch(error => console.error(error));



async function getObjectFromBucket(Bucket, Key){
    const command = new GetObjectCommand({
        Bucket,
        Key
    })

    try{
        const response = await client.send(command);

        console.log(response);
    }catch(err){
        console.error(err);
    }
}

// getObjectFromBucket(bucketName, "photos/cat.png");