const fs = require('fs');

const profileCtrl = (req, res) =>{
    let id = req.params.account_id;
    fs.readFile('data.json', 'utf-8', (err, content) =>{
        let arrContent = JSON.parse(content);
        let currentAcount = arrContent.find(user => user.id == id);
        res.render('profile', {currentAcount: currentAcount, accounts: arrContent});
    })
}

module.exports = profileCtrl;