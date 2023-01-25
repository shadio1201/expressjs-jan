let express = require('express');
const app = express()
const port = 3000

const continents = require('./continents');

const formRouter = require('./routes/form')
app.use('/form', formRouter);

app.set('view engine', 'pug');
app.use(express.static('public'));


app.get('/', (req, res, next) => {
    res.render('index', {
        title: "Forside",
        page: "index"
    })
})

app.get('/about', (req, res, next) => {
    res.render('about', {
        title: "About",
        page: "about"
    })
})

app.get('/user', (req, res, next) => {
    res.render('user', {
        name: "Peter Hansen",
        age: 25,
        email: "random@mail.dk",
        page: "user"
    })
})

app.get('/world', (req, res, next) => {
    res.send(continents);
})

app.listen(port, ()=> {
    console.log(`Server is running on ${port}`)
});
