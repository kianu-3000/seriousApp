const {db} = require("./../db/dbConnector.js");

// get users
const getUsers = (req, res) => {

	let sql = 'SELECT * FROM users';
	
	try{
		db.all(sql,[], (err, rows) => {

			let arr = [];
			if(err){
				throw err;
			}
			rows.map((row) => {
				let temp = {
					id: row.id,
					name: row.username, 
					password: row.password
				};
				arr.push(temp);
			})
			res.json({users: arr});
		});
	
	}catch(err){
		console.log(err);
	}	
}

// insert users
const insertUser = (req, res) => {
	
	const {username, password} = req.body; // payload
	const user = {
		name: username,
		password: password
	}

	try{
		let sql = 'INSERT INTO users (username, password) VALUES(?, ?)';
		db.run(sql, [user.name, user.password], (err) => {
			if(err){
				return res.status(401).json({message: 'error in creating new user'});
			}else{
				return res.status(200).json({message: `user ${username} created`});
			}
		});

	}	
	catch(err){
		console.log(err);
	}
}

// update users
const updateUser = (req, res) => {
	const id = req.params.id;
	const {username} = req.body; // payload
	const user = {
		username: username
	}

	try{
		const query = 'UPDATE users SET username = ? WHERE id = ?';
		db.run(query, [user.username, id], (err, rows) => {
			if(err){
				return res.status(401).json({message: 'error in creating new user'});
			}else{
				return res.status(200).json({message: `updated ${username}`});
			}
		});

	}	
	catch(err){
		console.log(err);
	}
}

// update users
const deleteUser = (req, res) => {
	const id = req.params.id;
	try{
		const query = 'DELETE FROM users WHERE id=?';
		db.run(query, [id], (err, rows) => {
			if(err){
				return res.status(401).json({message: 'error in creating new user'});
			}else{
				return res.status(200).json({message: `deleted user with id ${id}`});
			}
		});

	}	
	catch(err){
		console.log(err);
	}
}
// get single user
const getSingleUsers = (req, res) => {
	const { id } = req.params;
	let sql = 'SELECT * FROM users WHERE id = ?';
	
	try{
		db.all(sql,[id], (err, rows) => {

			let arr = [];
			if(err){
				throw err;
			}
			rows.map((row) => {
				let temp = {
					id: row.id,
					name: row.username, 
					password: row.password
				};
				arr.push(temp);
			})
			res.json({users: arr});
		});
	
	}catch(err){
		console.log(err);
	}	
}
module.exports = {
	getUsers,
	insertUser,
	updateUser,
	deleteUser,
	getSingleUsers
};