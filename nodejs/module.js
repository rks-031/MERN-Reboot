// (function (exports, require,module,  __dirname, __filename) {
//   var age = 25;
//   //console.log(name);
//   // npm modules

//   //const color = require("cli-color");
// })();

// const color = require("cli-color");

// console.log(color.red("hello"));
// console.log(color.yellow("hello"));

//local module
// const auth = require("./auth");

// //register("Rajnish");

// auth.register("Rajnish");
// auth.login("Rajnish", "Rajneesh#31");

//core modules

const path = require("path");

// dirname

// console.log(__filename);

//foldername
// console.log("Folder name: ", path.dirname(__filename));

//filename
// console.log("File name: ", path.basename(__filename));

//extension
// console.log("Extension name: ", path.extname(__filename));

//parse
// console.log("File name: ", path.parse(__filename));

//join
// console.log("File name: ", path.join(__dirname, "order", "app.js"));

//file system
const fs = require("fs");

//make a directory
// fs.mkdir(path.join(__dirname, "/test"), (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log("Folder created...");
// });

//creating a file
// fs.writeFile(path.join(__dirname, "test", "test.txt"), "Hello Node", (err) => {
//   if (err) {
//     throw err;
//   }
//   fs.appendFile(
//     path.join(__dirname, "test", "test.txt"),
//     "\nMore data",
//     (err) => {
//       if (err) {
//         throw err;
//       }
//       console.log("Data added...");
//     }
//   );
//   console.log("File created...");
// });

//read a file

// fs.readFile(path.join(__dirname, "test", "test.txt"), (err, data) => {
//   if (err) throw err;

//   const content = Buffer.from(data);
//   console.log(content.toString());
// });

//or

// fs.readFile(path.join(__dirname, "test", "test.txt"), "utf-8", (err, data) => {
//   if (err) {
//     throw err;
//   }

//   console.log(data);
// });

//os module

const os = require("os");

// type of os
// console.log(`type of os: ${os.type}`);
// console.log(`platform of os: ${os.platform}`);
// console.log(`cpu architecture: ${os.arch()}`);

// console.log("Free memory: ", os.freemem());
// console.log("Total memory: ", os.totalmem());

// console.log("Uptime: ", os.uptime());

//events module

const emitter = require("events");

// const myemitter = new emitter();

// myemitter.on("somename", (data) => {
//   console.log(data);
// });

// myemitter.emit("somename", {
//   name: "Rajnish",
// });

// class Auth extends emitter {
//   register(username) {
//     console.log(`Hello ${username}. You're registered successfully`);
//     this.emit("registered", username);
//   }
// }

// const auth = new Auth();

//listen
//verify email
// auth.on("registered", (username) => {
//   console.log(`Sending email to ${username}`);
// });

// //welcome email
// auth.on("registered", (username) => {
//   console.log(`Sending welcome email to ${username}`);
// });

// auth.register("Rajnish");
