/*const fs = require("fs");
fs.readFile("msg.txt",'utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);
});*/
import superheroes, { randomSuperhero } from "superheroes";
console.log("iam "+randomSuperhero());