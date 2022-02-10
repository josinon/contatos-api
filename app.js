const { Sequelize, DataTypes, Model } = require('sequelize')

const sequelize = new Sequelize({
    username: 'root',
    password: 'BHU*nji9',
    database: 'contatos',
    dialect: 'sqlite',
    storage: 'database.sqlite'
})


sequelize.authenticate()
    .then(() => {
        console.log('OK')
    }).catch( error => {
        console.log(error)
    })


class User extends Model{}

User.init({
    nome: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING}, 
    telefone: { type: DataTypes.STRING},
    dataNascimento: { type: DataTypes.DATEONLY}
}, 
    {sequelize}
)

// sequelize.sync()
// .then(() => console.log('OK'))
// .catch( error => console.log(error));

User.create( {
    name: 'xpto', 
    email: 'xpto@gmail.com', 
    telefone: '(99) 99999-9999',
    dataNascimento: '2020-01-01'
}).then( console.log('SALVOU'))
.catch( error => console.log(error))