const axios = require("axios");

const home = async (req, res) => {
    const response = await axios.get(`${process.env.URL}:${process.env.PORT}/getUsers`);
    const value = response.data.users;
    res.render('home', {values: value});
}

module.exports = {home}