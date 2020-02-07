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

<<<<<<< HEAD
server.delete('/user/:id', (req,res) => {
    if(users.length > 0){
        index = users.indexOf(req.params.id);
        users.splice(index,1);
        res.status(202).json( users );
    } else {
        res.status(204).json( users );
    }  
})

=======
>>>>>>> 06725a787b50e6b53da31152e17727f69583b5ea

server.listen(port, () => {
	console.log("Server is running on port: ", port);
});

