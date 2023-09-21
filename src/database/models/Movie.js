const { INTEGER } = require("sequelize");

module.exports = (sequelize,datatypes)=>{
    let alias="Movie"
    let cols= {
        id : {
            type : datatypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement :true

        },
        title: {
            type :datatypes.STRING(500),
            allowNull : false
        },
        rating : {
            type : datatypes.DECIMAL(3,1).UNSIGNED,
            allowNull : false,
        },
        awards : {
            type : datatypes.INTEGER.UNSIGNED,
            allowNull :  false,
            defaultValue : 0,
        },
        release_date : {
            type :datatypes.DATE,
            allowNull : false
        },
        length  : {
            type : datatypes.INTEGER.UNSIGNED,
            defaultVALUE : null
        },
        genre_id : {
            type : datatypes.INTEGER.UNSIGNED,
            defaultVALUE : null

        }
    }

    let config = {
        tableName : "movies",
        timestamps : true,//si no tiene tiempo va false
        underscored : true// agrega el alias de como le "gusta" llamarlo a sequelize

    }
    const Movie = sequelize.define(alias,cols,config);
    return Movie
}