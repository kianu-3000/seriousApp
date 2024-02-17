const express = require('express');
const router = express.Router();
const { getUsers, 
        insertUser, 
        updateUser, 
        deleteUser,
        getSingleUsers } = require('../controllers/apiController');

// api routes
router.get('/getUsers', getUsers);
router.post('/addUser', insertUser);
router.put('/updateUser/:id', updateUser);
router.delete('/deleteUser/:id', deleteUser);
router.get('/getSingleUser/:id', getSingleUsers);

module.exports = router;