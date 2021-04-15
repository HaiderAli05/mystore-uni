const express = require("express");
const router = express.Router();
const path = require('path');
const User = require("../models/user");


//Add a new User
router.post('/', async(req, res)=>{
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        country: req.body.country,
        phone: req.body.phone,
        password: req.body.password
    });
    try{
        const savedUser = await user.save();
        // res.json(savedUser);
        const login = path.join(__dirname, '../public/login.html');
        res.sendFile(login);

    }catch(err){
        res.json({message: err});
    }
});

//SignUp Users
router.get('/', async (req, res)=>{
    try{
        const signUp = await path.join(__dirname, '../public/signUp.html');
        res.sendFile(signUp);
    }catch(err){
        res.json({message: err});
    }
});
//Check all Users
router.get('/allusers', async (req, res)=>{
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        res.json({message: err});
    }
});
//Check a specific User by its ID
router.get('/:userId', async (req, res) => {
    try{
        const user = await User.findById(req.params.userId);
        res.json(user);
    }catch(err){
        res.json({message: err});
    }
});

//Update data of any User
router.patch('/:userId', async (req, res) => {
    try{
        const updatedUser = await User.updateOne(
            {_id: req.params.userId},
            {$set: {name: req.body.name}}
            );
        res.json(updatedUser);
    }catch(err){
        res.json({message: err});
    }
})

//Delete any User
router.delete('/:userId', async (req, res) => {
    try{
        const removedUser = await User.remove({_id: req.params.userId});
        res.json(removedUser);
    }catch(err){
        res.json({message: err});
    }
});

module.exports = router;