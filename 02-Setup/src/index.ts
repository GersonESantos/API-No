// Import server from server.ts
import{ server } from './server'; 

// Start server

server.listen(3333, () => {
    console.log('Rodando app listening at http://localhost:3333');
  });