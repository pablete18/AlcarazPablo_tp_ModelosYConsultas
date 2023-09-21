module.exports = (sequelize,datatypes)=>{
    let alias = 'Actor'
    let col = {
        id : {
            type : datatypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull: false,
            autoIncrement : true
        },
        first_name :{
            type : datatypes.STRING(100),
            allowNull : false
        },
        last_name :{
            type : datatypes.STRING(100)
        },
        rating :{
            type : datatypes.DECIMAL.UNSIGNED,
            allowNull : false,
            unique : true
        }
        
    }
    let config= {
        tablename : "movies_db",
        timeStamps : true, 
        underscored : true
    }
const Actor = sequelize.define(alias,col,config);
return Actor
}