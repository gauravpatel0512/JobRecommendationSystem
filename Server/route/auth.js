const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('Server is Up!')
});

// Route for registering user
router.post('/register', (req, res) =>{
    console.log(req.body);
    // res.send('my router page')
    res.json({message: req.body}); 
});


module.exports = router;