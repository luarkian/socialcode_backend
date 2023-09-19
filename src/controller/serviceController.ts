import Clients from '../models/client';
import connection  from '../database/index';
import OrderService from '../models/order_service';

export default {
    async createService (req, res) {
        try{
            var {client_id, status_id, repair_request, user_id,solution, description } = req.body;

            var client = await OrderService.create( { client_id, status_id, repair_request, user_id,solution, description });
            
            res.status(200).json({client});
        }
        catch(error){
            console.log(error);
            res.status(400).json({error});
        }
    },

    async editService (req, res) {
        try{
            var {id} =  req.params;
            var {client_id, repair_request, user_id, description, status_id, solution} = req.body;
            var service = await OrderService.findOne({where: {id}}) ;
            
            if(!service){
                res.status(401).json({message:"Ordem de serviço não encontrado!"});
            }
            else{
              var service =  await OrderService.update({
                 client_id,
                 repair_request,
                 user_id, 
                 description, 
                 status_id, 
                 solution
               }, {where: {id: service.id}})
                res.status(200).json({service});
            }
        }
        catch(error){
            res.status(400).json({error});
        }
    } ,

    async listServices (req, res){
        try{
            var query = 'SELECT * FROM order_service LEFT JOIN clients on order_service.client_id = clients.id';
            var  [order_service, metadata] = await connection.query(query);
            if(!order_service){
                res.status(200).json({message:"Não há chamados cadastrados!"});
            }

            res.status(200).json({order_service});
        }
        catch(error){
            console.log(error);
            res.status(400).json({error});
        }
    },

    async listServicesFrom (req, res){
        try{
            var {id} =  req.params;
            var query = 'SELECT * FROM order_service LEFT JOIN clients on order_service.client_id = clients.id AND clients.id ='+id;
            var  [order_service, metadata] = await connection.query(query);
            if(!order_service){
                res.status(200).json({message:"Não há chamados para este cliente!"});
            }

            res.status(200).json({order_service});
        }
        catch(error){
            console.log(error);
            res.status(400).json({error});
        }
    },

    async listServicesWithTec (req, res){
        try{
            var {id} =  req.params;
            var query = 'SELECT * FROM order_service LEFT JOIN users on order_service.user_id = users.id AND users.id ='+id;
            var  [order_service, metadata] = await connection.query(query);
            if(!order_service){
                res.status(200).json({message:"Não há chamados para este tecnico!"});
            }

            res.status(200).json({order_service});
        }
        catch(error){
            console.log(error);
            res.status(400).json({error});
        }
    },
/*
    async addTecnicoService (req, res) {
        try{
            var {id} =  req.params;
            var service;
            if(!service){
                res.status(401).json({message:"Ordem de serviço não encontrado!"});
            }
            else{
               
                res.status(200).json({});
            }
        }
        catch(error){
            res.status(400).json({error});
        }
    },*/

    async deleteService (req, res){
        try{
            var {id} =  req.params;
            var service = await OrderService.findOne({where: {id} });
            
            if(!service){
                res.status(200).json({message:"Ordem  de serviço  não encontrada"});
            }
            else{
                const service = await OrderService.destroy({where: {id} });
                res.status(200).json({message: "Ordem de serviço apagada!"});
            }
        }
        catch(error){
            res.status(400).json({error});
        }
    }
}