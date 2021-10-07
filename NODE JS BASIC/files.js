const fs = require ('fs');

// reading files

// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line');

//writing files
// fs.writeFile('./docs/blog1.txt', 'hello, cok ', () => {
// console.log('file sukses');
// })

// directories 
if (!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('Folder Created');
    })
} else{
    fs.rmdir('./assets', (err) => {
        if(err){
            console.log(err);
        }
        console.log('Folder Deleted');
    })
}
// deleting file
if(fs.existsSync('./docs/deletme.txt')) {
    fs.unlink('./docs/deletme.txt',(err)=> {
        if(err) {
            console.log(err)
        }
        console.log('file Deleted');
    })
    
}