const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({hello: 'Hello'})
})

module.exports = router;