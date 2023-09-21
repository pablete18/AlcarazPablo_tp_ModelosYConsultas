module.exports = (sequelize,datatypes)=>{
    let alias="Genre"
    let cols= {
        id : {
            type : datatypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement :true

        },
        name: {
            type :datatypes.STRING(100),
            allowNull : false
        },
        ranking : {
            type : datatypes.INTEGER.UNSIGNED,
            allowNull : false,
            unique: true
        },
        active : {
            type : datatypes.BOOLEAN,
            allowNull :  false,
            defaultValue : 1,
        }
      
    }

    let config = {
        tableName : "genres",
        timestamps : true,//si no tiene tiempo va false
        underscored : true// agrega el alias de como le "gusta" llamarlo a sequelize

    }
    const Genre= sequelize.define(alias,cols,config);
    return Genre
}