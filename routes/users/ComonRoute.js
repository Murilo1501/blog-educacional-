const {Router } = require('express')
const ComonController = require('../../controllers/users/comonController');

const router = Router();

router.get('/comon',ComonController.index);
router.post('/comon',ComonController.store);
router.delete('/comon/:id',ComonController.delete);
router.put('/comon/:id',ComonController.update);

module.exports = router;


