const expres = require('express');
const app = expres();

app.set('view engine', 'ejs');

app.use(expres.static(__dirname + '/node_modules/bootstrap/dist/css'))

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(3000, () => {
    console.log('Server Running......');
})
