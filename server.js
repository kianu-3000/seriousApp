const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/styles')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser());
app.use(cors()); // use cors on all requests

// import routes
const api = require('./routes/routes');
app.use('/', api);

const view = require('./routes/view');
app.use('/', view);

app.listen(process.env.PORT, ()=>{
	console.log(`running on port ${process.env.PORT}`);
});