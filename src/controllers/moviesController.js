const db = require('../database/models')
/* const Op = Sequelize.Op; */
module.exports={
    list : (req,res)=>{

        db.Movie.findAll()
        .then((movies)=> {return res.render('moviesList',{
            movies:movies
        })
        })
        .catch((error)=>console.log(error))
    },
    new : (req,res)=>{
        db.Movie.findAll({
            order : [['release_date','DESC']]
        })
        .then((movies)=>{
            return res.render('newestMovies',{
                movies:movies
            })})
            .catch((error)=>console.log(error))
        
    },
    recomended : (req,res)=>{
        db.Movie.findAll({
            order :[['release_date','DESC']],
            limit :5,
        })
        .then((movies)=>{ return res.render('recommendedMovies',{
            movies:movies})       
        })
        .catch((error)=>console.log(error))
    },
    detail: (req,res)=>{
        db.Movie.findByPk(req.params.id)
        .then((movie)=>{return res.render('moviesDetail',{
            movie:movie
        })
     })
    .catch((error)=>console.log(error))
}
        
}