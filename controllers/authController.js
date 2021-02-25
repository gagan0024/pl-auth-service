const logger   = require('../components/utils/logger');
const GenerateTokenProcess = require('../components/process/generateTokenProcess');

let generateTokenProcess = new GenerateTokenProcess();

exports.createToken = async (req, res) => {
    try{
        
        let data = await generateTokenProcess.generateToken(req.body.clientsecret, req.body.clientid, req.body.id);
        res.status(data[0]).json({
            token:data[1]
        });
            
    }
    catch(err){
        logger().error(err.toString());
        res.status(500).json({
            error:err.toString()
        });
    }
};


