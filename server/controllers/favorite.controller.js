const {Favorite}=require('../database-Sequelize/index')

const UsersFav = async(req,res) => {
    try {
    const result=await Favorite.findAll({where:req.params});
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const AddToFav = async(req,res) => {
    try {
    const result=await Favorite.create(req.body)
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const RemoveFav = async(req,res) => {
    try {
    const result=await Favorite.destroy({where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};


module.exports={UsersFav,AddToFav,RemoveFav}