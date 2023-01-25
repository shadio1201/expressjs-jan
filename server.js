let express = require('express');
const app = express()
const port = 3000

const formRouter = require('./routes/form')
app.use('/form', formRouter);

app.set('view engine', 'pug');
app.use(express.static('public'));


app.get('/', (req, res, next) => {
    res.render('index', {
        title: "Forside"
    })
})

app.get('/about', (req, res, next) => {
    res.render('about', {
        title: "About"
    })
})

app.listen(port, ()=> {
    console.log(`Server is running on ${port}`)
});
