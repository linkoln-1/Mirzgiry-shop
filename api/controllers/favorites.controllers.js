const Favorite = require("../models/Favorite.models");


module.exports.favoritescontroller = {
  createFavorite: async function (req, res) {
    const { favorites } = req.body;
      try{
        const favorite =  await Favorite.create({
            user: req.user.id,
            favorites
          });
          return res.json(favorite);
      }catch(e){
          return res.status(401).json(e.toString())
      }
     
     
   
   
  },
  deleteFavoriteById: async function (req, res) {
    const { id } = req.params;
      try{
        const favorite =  await  Favorite.findById(id);
        if(favorite.user.toString() === req.user.id){
          await  Favorite.findByIdAndRemove(id); 
          return res.json('удалено');
        }
        return res.status(401).json("Ошибка. Нет доступа")
       
      }catch(e){
          return res.status(401).json("Ошибка"+ e.toString())
      }
     
     
   
  },
  addProductToFavorite: async function(req, res) {
    const { id } = req.params;
    try {
      const favorite =  await  Favorite.findById(id);
      if(favorite.user.toString() === req.user.id){
         const favorites = await Favorite.findByIdAndUpdate(id,{
        $push: { favorites: req.body.favorites },
   
      });   
        res.json(favorites);
      }
     
    } catch (error) {
      console.log(error.toString());
    }
  },


  // getFavoriteById: async function (req, res) {
  //   try {
  //     const favorite = await Favorite.findById(req.params.id).populate('sizes');
  //     res.json(favorite);
  //   } catch (error) {
  //     console.log(error.toString());
  //   }
  // },
  getFavorites: async function (req, res) {
    try {
      const favorites = await Favorite.find({user: req.user.id}).populate('favorites');
      res.json(favorites);
    } catch (e) {
        return res.status(401).json("Ошибка"+ e.toString())
    }
  },
  
};