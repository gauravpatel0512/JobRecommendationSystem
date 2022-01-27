const express = require('express');
const router = express.Router();

//Database Connection
require("../db/connection");
//userRegister 
const UserRegister = require("../model/registerSchema");

router.get('/', (req, res)=>{
    res.send('Server is Up!')
});

//Using promise
// Route for registering user
// router.post('/register', (req, res) =>{
    
//     const { name, email, password, confirmPassword } = req.body ;
    
//     if( !name || !email || !password || !confirmPassword){
//         return res.status(422).json({ error: "Please Fill the details properly"});
//     }

//     UserRegister.findOne({email: email})
//     .then((userExist) =>{
//         if(userExist){
//             return res.status(422).json({ error: "Email already Exist"});
//         }

//         const user = new UserRegister({ name, email, password, confirmPassword });

//         user.save().then(()=>{
//             res.status(201).json({message: "User registered successfuly"});
//         }).catch((err)=> res.status(500).json({error:"Failed to register"}));
//     }).catch( err =>{console.log(err)});

// });

//Using async and await

router.post('/register', async (req, res) =>{
    
    const { name, email, password, confirmPassword } = req.body ;
    
    if( !name || !email || !password || !confirmPassword){
        return res.status(422).json({ error: "Please Fill the details properly"});
    }

    try{
        const userExist = await UserRegister.findOne({email: email});

        if(userExist){
            return res.status(422).json({ error: "Email already Exist"});
        }
    
        const user = new UserRegister({ name, email, password, confirmPassword });

        await user.save();
        res.status(201).json({message: "User Registered Successfuly"});
        
    } catch(err){
        console.log(err);
    }
});

// Login route
router.post('/signin', async (req, res)=>{
    try{
        const { email, password } = req.body;

        if(!email || !password){
            return res.status(400).json({error:"Pls fill the required details"});
        }

        const userLogin = await UserRegister.findOne({ email: email});
        console.log(userLogin);

        if(!userLogin){
            res.status(400).json({ error:"User error" });
        }else{
            res.json({ message:"User SignedIn Successfully" });
        }

    }catch(err){
        console.log(err);
    }
});



module.exports = router;