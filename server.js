const http = require("http");
const app = require("./backend/app")

// const server = http.createServer((req, res)=>{

//     res.end("Welcome to my 1st development Nodejs");
// });

const server = http.createServer(app);



// server run on 5000 port
// output display on cmd this is for server side
server.listen(5000, ()=>{
    // only display in command prompt
    console.log("check port number 5000");
});
