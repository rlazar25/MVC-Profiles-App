const expres = require('express');
const homeCtrl = require('../controllers/HomeCtrl');
const profileCtrl = require('../controllers/ProfileCtrl');

const router = expres.Router();


router.get('/', homeCtrl);

router.get('/profile/:account_id', profileCtrl.index);

router.get('/profile/:id/delete', profileCtrl.deleteProfile );

module.exports = router;