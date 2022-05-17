var connect = require('connect');

var app = connect();

app.use('/', (req, res) => {
  console.log(213);
  res.end('12321');
});

app.listen(7897);
