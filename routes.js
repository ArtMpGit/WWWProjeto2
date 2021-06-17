const express = require('express');
const routes = new express.Router();

const PostagemController = require('./controller/PostagemController');

routes.get('/', PostagemController.get);
routes.get('/:id', PostagemController.getById);
routes.post('/', PostagemController.post);
routes.put('/:id', PostagemController.put);
routes.delete('/:id', PostagemController.delete);

module.exports = routes;