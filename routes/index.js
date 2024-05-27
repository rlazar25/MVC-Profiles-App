const expres = require('express');
   const homeCtrl = require('../controllers/HomeCtrl');
const profileCtrl = require('../controllers/ProfileCtrl');

const router = expres.Router();


router.get('/', homeCtrl)

router.get('/profile/:account_id', profileCtrl)

module.exports = router;