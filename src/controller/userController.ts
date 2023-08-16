const Users = require('../models/user')

module.exports = {

    async createUser (req, res) {
        try {
            const { firstname, lastname, username, password, email, is_active, profile_id} = req.body;
    
           const user =  Users.findOne( { where: {email}});

            if(user.email){
                res.status(200).json({message:"Email já utilizado!"});
            }
            else{
                const user =  await Users.create({ firstname, lastname, username, password, email, is_active, profile_id});
        
                res.status(200).json({user});
            }
        }
         catch (error){
            res.status(400).json({error});
         }
    },

    async editUser (req, res){
        try{
            const {id} =  req.params;
            const {firstname, lastname, username, password, email, is_active, profile_id} = req.body;

            const user =  await Users.findOne( { where: {id}});
            if(!user){
                res.status(401).json({message:"Nenhum usuário encontrado!"});
            }
            else{
                const user = await Users.update(
                    { firstname,
                    lastname,
                    username,
                    email, 
                    is_active, 
                    profile_id
                    }, 
                    {where: {id}}); 
                res.status(400).json({user});
            }
        }
        catch(error){
            res.status(400).json({error});
        }    
    },

    async listUsers(req, res){
       try{
        const users =  await Users.findAll();
        if(!users){
            res.status(200).json({message:"Não existe usuários cadastrados!"});
        }
        res.status(200).json({users});
       }
       catch (error){
        res.status(400).json({error});
       }
    },

    async deleteUser(req, res) {
        try{
            const {id} =  req.params;
            const user = await Users.findOne({where: {id} });

            if(!user){
                res.status(200).json({message:"Usuário não encontrado!"});
            }
            else{
                const user = await Users.destroy({where: {id} });
                res.status(200).json({message: "Usuário apagado!"});
            }
        }
        catch(error){
            res.status(400).json({error});
        }
    }
}