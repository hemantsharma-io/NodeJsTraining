const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const database = 'task-manager';

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client)=> {
    if(error){
        return console.log('problem connection mongodb'+ error);
    }
    const db = client.db(database);
    db.collection('users').insertOne({
        'name':'Jen Sharma',
        'role':'Architect'
    }, (error, result)=> {
        if(error){
            return console.log('error inserting users');
        }

        console.log(result.ops);
    });
});