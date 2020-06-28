/*core*/
var express = require('express');
var router = express.Router();

/*services*/
const update_service = require('../../services/category/update');
const add_service = require('../../services/category/add');
const remove_service = require('../../services/category/remove');
const list_service = require('../../services/category/list');

router.post('/add', async function(req, res) {
    try {
        const body = req;
        const category = await add_service.add(body);
        res.send(category);
    } catch (err) {
        res.send(err);
    }
});

router.put('/update', async function(req, res) {
    try {
        const body = req;
        const category = await update_service.upd(body);
        res.send(category);
    } catch (err) {
        res.send(err);
    }
});

router.get('/list', async function(req, res) {
    try {
        const body = req;
        const categories = await list_service.list(body);
        return res.send(categories);
    } catch (err) {
        return res.send(err);
    }
});

router.delete('/remove/:id', async function(req, res) {
    try {
        const id = Object(req.params.id.replace(":id=", ""));
        const response = await remove_service.remove(id, res);
        return res.send(response);
    } catch (err) {
        return res.send(err);
    }
});

module.exports = router;