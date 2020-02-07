const express = require ('express');
const server = express();
const port = 3000;

let users = [];

server.get('/', (req, res) => {
	res.send("Hello World!");
});

server.get('/users', (req, res) => {
	res.json(users);
});

server.get('/user/:id', (req, res) => {
	const user = users.find(usr => usr.id == req.params.id);
	res.json(user);
});

server.post('/user', (req, res) => {
	users.push({id: 0});
	res.json(users);
}); 


server.listen(port, () => {
	console.log("Server is running on port: ", port);
});



