//simple mongoDb crud operation example
const {MongoClient, ObjectId}=require('mongodb');

//MongoDB connection URL and database name
const url='mongodb://localhost:27017/';// your mongoDB URL
const dbName='task'; // your database name
const collectionName='user'; // your collection name

//create a new MongoClient
const client=new MongoClient(url);

async function main(){
    try{
        //connect to mongoDB
        await client.connect();
        console.log('Connected successfully to MongoDB');
        const db=client.db(dbName);
        const collection=db.collection(collectionName);

        console.log('\n--INSERT OPERATION--');
        const newUser={name:'John Doe', age:30, email:'john@example.com'};
        const insertResult=await collection.insertOne(newUser);
        console.log(collection)
        console.log('Inserted document:', insertResult.insertedId);
        
        // Insert multiple documents
       console.log('\n--INSERTMANY OPERATION--');
        const manyuser=[
            {name:'Jane Smith', age:25, email:'jane@example.com'},
            {name:'Mike Johnson', age:35, email:'mike@example.com'},
            {name:'Emily Davis', age:28, email:'emily@example.com'}
        ];
        const manyResult=await collection.insertMany(manyuser);
        console.log(collection)
        console.log('Inserted document:', manyResult.insertedId);

        console.log('\n--FIND OPERATION--');
    }
    catch(error){
        console.error('Error:',error);
       }
       finally{
        //close the connection
        await client.close();
        console.log('\nConnection closed');
       }
}

main();