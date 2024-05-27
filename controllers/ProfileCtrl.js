const { use } = require('../routes');

const fs = require('fs').promises;

const index = async (req, res) =>{
    let id = req.params.account_id;
    // fs.readFile('data.json', 'utf-8', (err, content) =>{
    //     let arrContent = JSON.parse(content);
    //     let currentAcount = arrContent.find(user => user.id == id);
    //     res.render('profile', {currentAcount: currentAcount, accounts: arrContent});
    // })
    const arrContent = JSON.parse(await fs.readFile('./data.json', 'utf-8'));
    let currentAcount = arrContent.find(user => user.id == id);
    res.render('profile', {currentAcount, accounts: arrContent})
}

const deleteProfile = async (req,res) =>{
    let id = req.params.id;
    const arrContent = JSON.parse(await fs.readFile('./data.json', 'utf-8'));
    const filtered = arrContent.filter(user => user.id != id);
    await fs.writeFile('./data.json', JSON.stringify(filtered));
    res.redirect('/');
}

module.exports = {index, deleteProfile};