const Users = require('../models/user')

module.exports = {

    async createUser (req, res) {
        try {
            const { firsname, lastname, username, password, email, is_active, profile} = req.body;
    
           const user =  Users.findOne( { where: {email}});

            if(user.email){
                res.status(200).json({message:"Email já utilizado!"});
            }
            else{
                const user =  await Users.create({ firsname, lastname, username, password, email, is_active, profile});
        
                res.status(200).json({user});
            }
        }
         catch (error){
            res.status(400).json({error});
         }
    }
}