module.exports = (sequelize, DataTypes) => {
    const Contato = sequelize.define('Contato', {
        nome: { type: DataTypes.STRING },
        email: { type: DataTypes.STRING}, 
        telefone: { type: DataTypes.STRING},
        dataNascimento: { type: DataTypes.DATEONLY}
    });

    return Contato;
};