const express= require('express');
const crypto= require('crypto'); 
const {MongoClient}= require ('mongodb');

const app=express();
const url='mongodb://localhost:27017';

app.get('/secret',(req,resp)=>{

    MongoClient.connect(url).then(client=>{
        const db=client.db('homework7');
        if(db){
            db.collection('homework7').findOne({},(err,doc)=>{
                if(err) throw err;
                 
        const decipher = crypto.createDecipher('aes256', 'asaadsaad');
        
        const encrypted =doc.message;
            
        let decrypted = decipher.update(encrypted, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
      //  console.log(decrypted);
      resp.json(decrypted);
        
            })
        }
          
        })
        .catch(err=>console.log('error connecting to db'))




}) ;
app.listen(8080,()=>console.log("server started on port 8080"))