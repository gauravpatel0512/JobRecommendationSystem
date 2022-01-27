const mongoose = require('mongoose');

const MONGODB_URI = process.env.DATABASE;


mongoose.connect(MONGODB_URI).then(()=>{
    console.log(`Connection successful`);
}).catch((err) => console.log(`No connection`));