const jwt = require('jsonwebtoken');
const ClientsData = require('../dal/clientsData');
const UsersData = require('../dal/usersData');

let clientsData = new ClientsData();
let usersData = new UsersData();

class GenerateTokenProcess{
    async generateToken(clientsecret, clientid, id){
        let clientDetails = await clientsData.findByClient(clientsecret , clientid);
        if(clientDetails === null || clientDetails === undefined){
            return [401,'Invalid Client'];
        }

        let userDetails = await usersData.findById(id);
        
        if(userDetails=== null || userDetails === undefined){
            return [401,'User Not Found'];
        }
        
        const payload ={
            id: userDetails.id,
            orgId:userDetails.orgId,
            mobile: userDetails.mobile,
            name: userDetails.name,
            email: userDetails.email,
            appCD:clientDetails.appCD
        }
        
    
    const jwttoken = jwt.sign(payload, clientDetails.clientSecret, {
            expiresIn: clientDetails.tokenExpirationTime,
            algorithm:clientDetails.algorithm
        });

    return [200,jwttoken]; 
    };
}

module.exports = GenerateTokenProcess;
