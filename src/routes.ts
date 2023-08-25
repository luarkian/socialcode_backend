const {Router} = require('express');
const router = Router();
import UserCrontroller from './controller/userController';
import ClientController from './controller/clientController';
import ServiceController from './controller/serviceController';

//const  = require('./models/user');
router.get('/', (req, res) => {
    res.json({hello: 'Hello'})
});

router.post('/new_user', UserCrontroller.createUser);

router.put('/edit_user/:id', UserCrontroller.editUser);

router.get('/list_users', UserCrontroller.listUsers);

router.delete('/delete_user/:id', UserCrontroller.deleteUser);

router.post('/new_client', ClientController.createClient);

router.put('/edit_client/:id', ClientController.editClient);
 
router.delete('/delete_client/:id', ClientController.deleteClient);

router.get('/list_clients', ClientController.listClients);

router.post('/new_service', ServiceController.createService);

router.put('/edit_service/:id', ServiceController.editService);
 
router.delete('/delete_service/:id', ServiceController.deleteService);

export default router;