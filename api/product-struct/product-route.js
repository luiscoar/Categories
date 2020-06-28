/*core*/
var express = require('express');
var router = express.Router();

/*services*/
const update_service = require('../../services/product/update');
const add_service = require('../../services/product/add');
const remove_service = require('../../services/product/remove');

router.put('/upd/', async function(req, res) {
    try {
        const body = req.body;
        const response = await update_service.upd(body);
        res.send(response);
    } catch (err) {
        res.send(err);
    }
});

router.post('/add', async function(req, res) {
    const body = req.body;
    const response = await add_service.add(body, res);
    res.send(response)
});

router.put('/remove', async function(req, res) {
    try {
        const body = req.body;
        const response = await remove_service.remove(body);
        res.send(response);
    } catch (err) {
        res.send(err);
    }
});

router.get('/list', async function(req, res) {
    res.send(null);
});

module.exports = router;