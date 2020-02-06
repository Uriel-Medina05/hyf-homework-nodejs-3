const express = require ('express');
const server = express();
const travis = require('travis-ci');

server.get('/', (req, res) => {
	res.send("Hello World");
}).listen(3000, () => {
	console.log("Server is running...");
});