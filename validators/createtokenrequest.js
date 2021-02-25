const {check, validationResult} = require('express-validator');

exports.validateCreateTokenRequest = [
  check('clientsecret')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Client Secret can not be empty!'),
  check('clientid')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Client Id can not be empty!')
    .bail(),
  check('id') 
  .trim()
  .not()
  .isEmpty()
  .withMessage('Id can not be empty!')
  .isUUID()
  .bail(), 
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({errors: errors.array()});
    next();
  },
];