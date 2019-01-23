const router = express.Router();
let {msleep} = require('usleep');
const { check, validationResult } = require('express-validator/check');
var base64Img = require('base64-img');
var async = require('async');
var crypto = require('crypto');
app.use(express.json());

var reqBody=[
    //check('order_id').isLength({ min: 1 }).withMessage('Not empty')
];

router.post('/', reqBody, (req, res, next) => {

        res.status(200).json({
            status:'success',
            result: req.body,
        });

        log.info(req.body);
});


module.exports = router;
