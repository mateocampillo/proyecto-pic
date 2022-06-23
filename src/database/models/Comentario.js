module.exports = function(sequelize, dataTypes){
    const Comentario = sequelize.define('Comentario',{
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        usuario: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        comentario: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        created_at: {
            type: dataTypes.DATE,
            allowNull: false
        }
    },{
        timestamps: false,
        tableName: 'comentarios'
    })
    return Comentario;
}