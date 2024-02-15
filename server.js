const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();


app.use(bodyParser());
app.use(cors()); // use cors on all requests

// import routes
const home = require('./routes/routes');
app.use('/', home);

app.listen(process.env.PORT, ()=>{
	console.log(`running on port ${process.env.PORT}`);
});