// Import express
import express from 'express'; 

const server = express();

// 
server.get('/', (req, res) => {
    res.send('Ola Devs!');
});


export { server };
