const express = require ('express');
const server = express();

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


server.listen(3000, () => {
	console.log("Server is running...");
});



server.get('/', (req, res) => {
	res.send("Hello World!");
}).listen(3000, () => {
	console.log("Server is running...");
});
