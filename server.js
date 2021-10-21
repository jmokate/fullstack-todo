const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pgAccess = require('./pgAccess');
const path = require("path");
const http = require('http');
const server = http.createServer(app);


pgAccess.connectToDb();

app.use(express.static(path.join(__dirname, "client/build")));
app.use(bodyParser.json());

const getRoute = require('./routes/routes');
app.use('/api/get', getRoute);

const postRoute = require('./routes/routes');
app.use('/api/post', postRoute);

const putRoute = require('./routes/routes');
app.use('/api/put', putRoute);

const deleteRoute = require('./routes/routes');
app.use('/api/delete', deleteRoute);

app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


server.listen(5000, () => console.log("app is listening on port 5000"));