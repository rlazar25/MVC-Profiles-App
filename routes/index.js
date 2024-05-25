const expres = require('express');
const fs = require('fs');

const router = expres.Router();


router.get('/', (req, res) =>{
    fs.readFile('data.json', 'utf-8', (err, file) => {
        res.render('index', {accounts: JSON.parse(file)});
    });
})

router.get('/profile/:account_id',(req, res) =>{
    res.render('profile');
})

module.exports = router;