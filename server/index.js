const express = require('express');
const app = express();
const path = require('path');

//serve up static files
app.use(express.static(path.resolve(__dirname, '..', 'client')));
app.use(express.static(path.resolve(__dirname, '..', 'node_modules')));

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

// handle every other route with index.html, which will contain
// a script tag to the app's js file(s).
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'))
});

//listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log("Listening on port 3000");
});
