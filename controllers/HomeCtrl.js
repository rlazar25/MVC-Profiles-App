const fs = require('fs').promises;


const homeCtrl = async (req, res) =>{
    const content = await fs.readFile('./data.json', 'utf-8');
    // await fs.writeFile('./new_data.json', content)
    res.render('index', {accounts: JSON.parse(content)});
}


module.exports = homeCtrl;