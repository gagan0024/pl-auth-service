const db = require('./dbContext');
const Clients = db.clients;
const AppCache = require('../process/cacheProcess');
const appCache = new AppCache();

class ClientsData{
        constructor() {
            Clients.findAll().then(function(data) {
                appCache.setByKey('clients',JSON.stringify(data, null, 2));
              })
          };

        async find(predicate){
          return await Clients.findOne({ where: predicate });
        };

        async findByClient(clientSecret, clientId){
         let predicate = { clientSecret: clientSecret , clientid : clientId};
            return await Clients.findOne({ where: predicate });
        };
}

module.exports = ClientsData;