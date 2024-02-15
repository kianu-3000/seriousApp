const express = require('express');
const router = express.Router();
const { getUsers, 
        insertUser, 
        updateUser, 
        deleteUser } = require('../controllers/home');


router.get('/getUsers', getUsers);
router.post('/addUser', insertUser);
router.put('/updateUser/:id', updateUser);
router.delete('/deleteUser/:id', deleteUser);

module.exports = router;