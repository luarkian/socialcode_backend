import Clients from '../models/client';
import Address from '../models/address';

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
    }
}