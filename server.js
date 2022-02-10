const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

var corsOptions = {
    origin: '*'
};

app.use(cors(corsOptions));

// faz o parse dos requests para o formato json
app.use(bodyParser.json());

// faz o parse dos requests de formularios
app.use(bodyParser.urlencoded( { extended: true }));

const db = require('./app/models')

db.sequelize.sync();


app.get('/',  (req, res) => {
    res.json({ message: 'Bem vindo à minha primeira API'})
})


require('./app/routes/contato.routes')(app);

//configura o servidor
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})