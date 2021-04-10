const mongoose = require('mongoose');

require('dotenv/config');

mongoose.connect(process.env.DB, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Successfully Connected with MongoDB.');
}).catch((err) =>{
    console.log('Connection fialed with MongoDB.');
})
