const expres = require('express');
const fs = require('fs');

const router = expres.Router();


router.get('/', (req, res) =>{
    fs.readFile('data.json', 'utf-8', (err, file) => {
        res.render('index', {accounts: JSON.parse(file)});
    });
})

router.get('/profile/:account_id',(req, res) =>{
    let id = req.params.account_id;
    fs.readFile('data.json', 'utf-8', (err, content) =>{
        let arrContent = JSON.parse(content);
        let currentAcount = arrContent.find(user => user.id == id);
        res.render('profile', {currentAcount: currentAcount, accounts: arrContent});
    })
})

module.exports = router;