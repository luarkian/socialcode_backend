const {Router} = require('express');
const router = Router();
const UserCrontroller = require('./controller/userController.ts')

//const  = require('./models/user');
router.get('/', (req, res) => {
    res.json({hello: 'Hello'})
});

router.post('/new_user', UserCrontroller.createUser);

module.exports = router;