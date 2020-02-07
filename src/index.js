const express = require ('express');
const server = express();

<<<<<<< HEAD
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

=======

server.get('/', (req, res) => {
	res.send("Hello World!");
}).listen(3000, () => {
	console.log("Server is running...");
});
>>>>>>> 5b0459b1ac78089c2b1e6dc2e6e6334d156d8f93
