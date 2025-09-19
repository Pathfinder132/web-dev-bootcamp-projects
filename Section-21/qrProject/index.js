/*import inquirer from "inquirer";
let p = inquirer.prompt(["give the link"]);
var qr = require("qr-image");
var fin = qr.image('finalQR',{type: 'png'});
qr.pipe(require("fs").createWriteStream('finalQR'));*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message:"type your url",
        name:"URL"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const p = answers.URL;
    var qr_png = qr.image(p);
    qr_png.pipe(fs.createWriteStream('img.png'));
    fs.writeFile('url.txt',p,(err)=>{
        if(err) throw err;
        console.log("file is saved");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
