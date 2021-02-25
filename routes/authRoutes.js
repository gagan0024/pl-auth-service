const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const {validateCreateTokenRequest} = require('../validators/createtokenrequest');
  


/**
* @swagger
* paths:
*  /api/v1/auth/token:
*    post:
*      summary: Creates a new token.
*      tags: 
*           - token
*      consumes:
*        - application/json
*      parameters:
*        - in: body
*          name: Token
*          description: Create Token.
*          schema:
*            type: object
*            required:
*              - clientsecret
*              - clientid
*              - id 
*            properties:
*              clientsecret:
*                type: string
*              clientid:
*                type: string
*              id:
*                type: string
*      responses:
*        200:
*          description: Created
*/          
router.route('/token').post(validateCreateTokenRequest,authController.createToken);


module.exports = router;