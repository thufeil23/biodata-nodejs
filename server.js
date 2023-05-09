const http = require('http');
const biodata = require('./modules/biodata');

http.createServer(function (req, res) {
  console.log('Received request for: ' + req.url);

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Biodata</h1>');

  for (let i = 0; i < biodata.length; i++) {
    let label = "";
    let value = biodata[i];

    if (i === 0) {
      label = "Nama";
    } else if (i === 1) {
      label = "Tempat Lahir";
    } else if (i === 2) {
      label = "Tanggal Lahir";
    } else if (i === 3) {
      label = "Alamat";
    }

    if (label !== "") {
      console.log('Writing ' + label + ': ' + value);
      res.write(label + ": " + value + "<br>");
    }
  }

  res.end();
}).listen(3000, function () {
  console.log('Server is listening on port 3000');
});
