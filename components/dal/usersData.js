let db = require('./dbContext');
let Users = db.users;

class UsersData{
    async findById(id){
        return await Users.findByPk(id);
    }
}

module.exports = UsersData;