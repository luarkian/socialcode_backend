import Clients from '../models/client';
import Address from '../models/address';
import  connection  from '../database/index';

export default {
    async createClient (req, res) {
        try{
            var { business_name, fantasy_name, municipal_registration, state_registration, email, phone,celphone, street, number, cep, complement} = req.body;
            
            var address =  await Address.create({ street, number, cep, complement});

            var client = await Clients.create( {  business_name, fantasy_name, municipal_registration, state_registration, email, phone,celphone, address_id: address.id });
            
            res.status(200).json({client});
        }
        catch(error){
            console.log(error);
            res.status(400).json({error});
        }
    },

    async editClient (req, res) {
        try{
            var {id} =  req.params;
            var {business_name, fantasy_name, municipal_registration, state_registration, email, phone, celphone,street,number, cep, complement } = req.body;

            var existingClient  =  await Clients.findOne( { where: {id}});
            if(!existingClient){
                res.status(401).json({message:"Nenhum cliente encontrado!"});
            }
            else{
                var client = await Clients.update(
                    { business_name, 
                      fantasy_name, 
                      municipal_registration, 
                      state_registration, 
                      email, 
                      phone, 
                      celphone
                    },{
                        where: {id: existingClient.id}
                    });
                
                var address = await Address.update({ 
                      street,
                      number, 
                      cep, 
                      complement
                    }, 
                    {
                        where:{ id: existingClient.address_id} 
                    }); 
               
                res.status(200).json({message:"Cliente atualizado!"});
            }
        }
        catch(error){
            console.log(error);
            res.status(400).json({error});
        }
    } ,
    
    async listClients (req, res){
        try{
            var query = 'SELECT * FROM clients LEFT JOIN address on clients.address_id = address.id';
            var  [clients, metadata] = await connection.query(query);
            if(!clients){
                res.status(200).json({message:"Não existe usuários cadastrados!"});
            }

            res.status(200).json({clients});
        }
        catch(error){
            console.log(error);
            res.status(400).json({error});
        }
    },

    async deleteClient (req, res){
        try{
            var {id} =  req.params;
            var client = await Clients.findOne({where: {id} });
            var address = await Address.findOne({where: {id:client.address_id} });

            if(!client){
                res.status(200).json({message:"Cliente não encontrado!"});
            }
            else{
                
                var client = await Clients.destroy({where: {id} });
                var address = await Address.destroy({where: {id: address.id} });
                res.status(200).json({message: "Cliente apagado!"});
            }
        }
        catch(error){
            res.status(400).json({error});
        }
    }
}