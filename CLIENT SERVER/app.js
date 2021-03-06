const express = require ('express');
const morgan = require ('morgan')
const mongoose = require ('mongoose');
const blogRoutes = require ('./routes/blogRoutes');

//express app
const app = express();

// Connect to MongoDB
const dbURI = 'mongodb+srv://imamnghr:test1234@nodetuts.1aa8c.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// midleware & Static file
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


// routes
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

// BloRoute
app.use(blogRoutes);

// 404 page
app.use((req,res) => {
    res.status(404).render('404', {title: '404'})
})