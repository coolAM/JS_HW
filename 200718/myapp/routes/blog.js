var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('HFsds');
  
});
router.get('/:id', (req, res, next)=>{
    res.send('Its blog ${req.params.id}')
})
module.exports = router;
