const db = require('../models');
const Contato = db.contatos;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    console.log('CREATE');
    console.log(req.body)
    if (!req.body.nome){
        res.status(400).send({
            message: 'Conteudo nao pode ser vazio'
        });
        return;
    }

    console.log('CREATE2');

    const contato = req.body;

    Contato.create(contato)
    .then( data => {
        res.send(data);
    }).catch( err => {
        res.status(500).send({
            message: err.message || 'Algum erro aconteceu na criacao do contato'
        });
    });
};

exports.findAll = (req, res) => {
    console.log('PASSOU ... ')
    Contato.findAll({})
    .then( data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send( {
            message: err.message || 'Algum erro aconteceu na busca dos contatos'
        });
    })
};


exports.findOne = (req, res) => {
    const id = req.params.id;

    Contato.findByPk(id)
    .then(data => {
        res.send(data);
    }).catch( err => {
        res.status(500).send({
            message: `Erro ao recuperar Contato com id ${id}`
        });
    });
};


exports.update = (req, res) => {
    const id = req.params.id;
    
    Contato.update(req.body, {
        where: { id: id}
    }).then(num => {
        if (num == 1){
            res.send({
                message: 'Contato atualizado com sucesso'
            });
        } else {
            res.send({
                message: `Não foi possível atualizar o contato com id=${id}`
            });
        }
    }).catch( err => {
        res.status(500).send({
            message: `Erro ao atualizar contato com id=${id}`
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Contato.destroy(
        { where : { id: id}}
    ).then( num => {
        if (num == 1){
            res.send({
                message: 'Contato deletado com sucesso'
            });
        } else {
            res.send({
                message: `Não foi possível deletar o contato com id=${id}`
            });
        }
    }).catch( err => {
        res.status(500).send({
            message: `Erro ao deletar contato com id=${id}`
        });
    });
};

exports.deleteAll = (req, res) => {
    
    Contato.destroy({})
    .then( nums => {
        res.send({
            message: `${nums} contatos deletados com sucesso.`
        });
    }).catch( err => {
        res.status(500).send({
            message: err.message || 'Algum erro ocorreu ao remover todos os contatos'
        });
    });
};