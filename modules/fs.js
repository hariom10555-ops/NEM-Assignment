const fs = require('fs');

// let data = "hell dost..."

// fs.writeFile("text.txt",data,(err)=>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("file created...");
//     }
// })

// fs.appendFile("text.txt",data,(err)=>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("file append...");
        
//     }
// })

fs.readFile("text.txt",data,(err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log("file read...");
    }
})

fs.unlink("text.txt",data,(err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log("file read...");
    }
})