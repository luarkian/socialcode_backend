const {Router} = require('express');
const router = Router();
import UserCrontroller from './controller/userController';
import ClientController from './controller/clientController';

//const  = require('./models/user');
router.get('/', (req, res) => {
    res.json({hello: 'Hello'})
});

router.post('/new_user', UserCrontroller.createUser);

router.put('/edit_user/:id', UserCrontroller.editUser);

router.get('/list_users', UserCrontroller.listUsers);

router.delete('/delete_user/:id', UserCrontroller.deleteUser);

router.post('/new_client', ClientController.createClient);
 

export default router;