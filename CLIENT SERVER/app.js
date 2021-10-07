const express = require ('express');
const morgan = require ('morgan');
//express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requirement 
app.listen(3000);

// midleware & Static file
app.use(express.static('public'));
app.use(morgan('dev'));

app.get ('/', (req, res) => {
    const blogs = [
        {title: 'Kirno Finds Pussy', snippet: 'lorem ipsum dolor sit amet consecture'},
        {title: 'Kirno Find Stars', snippet: 'lorem ipsum dolor sit amet consecture'},
        {title: 'how to defeat boster', snippet: 'lorem ipsum dolor sit amet consecture'},
    ]

    res.render('index', { title: 'Home', blogs}); 
});

app.get ('/about', (req, res) => {
    res.render('about', { title: 'About'}); 

});

app.get('/blogs/create', (req,res)=> {
    res.render('create', { title: 'Blogs'});
})

// 404 page
app.use((req,res) => {
    res.status(404).render('404')
})