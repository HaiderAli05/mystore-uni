const mongoose = require('mongoose');

require('dotenv/config');

mongoose.connect("mongodb+srv://haider:haider*786MDAL@cluster0.nogr8.mongodb.net/demosite?retryWrites=true&w=majority", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Successfully Connected with MongoDB.');
}).catch((err) =>{
    console.log('Connection fialed with MongoDB.');
})
