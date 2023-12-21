//http module

const http = require("http");

const fs = require("fs");

const path = require("path");

const app = http.createServer((req, res) => {
  //   if (req.url == "/") {
  //     fs.readFile(
  //       path.join(__dirname, "public", "index.html"),
  //       (err, content) => {
  //         if (err) throw err;
  //         res.end(content);
  //       }
  //     );
  //   } else if (req.url == "/about") {
  //     fs.readFile(
  //       path.join(__dirname, "public", "about.html"),
  //       (err, content) => {
  //         if (err) throw err;
  //         res.end(content);
  //       }
  //     );
  //   }

  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  let ext = path.extname(filePath);

  let contentType = "text/html";
  if (!ext) {
    filePath += "html";
  }

  switch (ext) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "text/javascript";
      break;
    default:
      contentType = "text/html";
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      fs.readFile(path.join(__dirname, "public", "error.html"), (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end("Error!!");
        } else {
          res.writeHead(404, {
            "Content-Type": contentType,
          });
          res.end(data);
        }
      });
    } else {
      res.writeHead(200, {
        "Content-Type": contentType,
      });
      res.end(content);
    }
  });
});

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});