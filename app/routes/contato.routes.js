module.exports = app => {
    const contatos = require('../controllers/contato.controller');
    
    var router = require('express').Router();

    router.post('/', contatos.create);
    router.get('/', contatos.findAll);
    router.get('/:id', contatos.findOne);
    router.put('/:id', contatos.update);
    router.delete('/:id', contatos.delete);
    router.delete('/', contatos.deleteAll);

    app.use('/api/contatos', router);

};