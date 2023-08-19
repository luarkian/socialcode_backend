import users from '../models/user';

export default {

    async createUser (req, res) {
        try {
            var { firstname, lastname, username, password, email, is_active, profile_id} = req.body;
    
           var User =  users.findOne( { where: {email}});

            if(User.email){
                res.status(200).json({message:"Email já utilizado!"});
            }
            else{
                var User =  await users.create({ firstname, lastname, username, password, email, is_active, profile_id});
        
                res.status(200).json({User});
            }
        }
         catch (error){
            console.log(error);
            res.status(400).json({error});
         }
    },

    async editUser (req, res){
        try{
            var {id} =  req.params;
            var {firstname, lastname, username, password, email, is_active, profile_id} = req.body;

            var user =  await users.findOne( { where: {id}});
            if(!user){
                res.status(401).json({message:"Nenhum usuário encontrado!"});
            }
            else{
                var user = await users.update(
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
        var users =  await users.findAll();
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
            var {id} =  req.params;
            var user = await users.findOne({where: {id} });

            if(!user){
                res.status(200).json({message:"Usuário não encontrado!"});
            }
            else{
                const user = await users.destroy({where: {id} });
                res.status(200).json({message: "Usuário apagado!"});
            }
        }
        catch(error){
            res.status(400).json({error});
        }
    }
}