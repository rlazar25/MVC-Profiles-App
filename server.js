const expres = require('express');
const routes = require('./routes')
const app = expres();

app.set('view engine', 'ejs');

app.use(expres.static(__dirname + '/node_modules/bootstrap/dist/'));
app.use(expres.static(__dirname + '/public'));

// root
app.use('/', routes);

app.listen(3000, () => {
    console.log('Server Running......');
})
