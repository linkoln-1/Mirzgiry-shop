const Favorite = require("../models/Favorite.model");
const Product = require("../models/Product.model");


module.exports.favoritescontroller = {
  createFavorite: async function (req, res) {
    console.log("cr", req.body)
    const { productId } = req.body.loginData;
  
    try {
      let favorite;
  
      // Проверяем, существует ли элемент с productId в списке избранных для пользователя
      const existingFavorite = await Favorite.findOne({ user: req.user.id, productId });
      if (existingFavorite) {
        // Если элемент уже существует, удалим его
        await Favorite.deleteOne({ user: req.user.id, productId });
        const product = await Product.findById(productId);
     
        product.checkHeart=!product.checkHeart
        product.save();
         console.log("product", product)
  return res.json({ message: 'Товар  удален из избранных' });

        
      } else {
        const product = await Product.findById(productId);
        product.checkHeart=!product.checkHeart
        product.save();
        // Если элемент не существует, создадим его
        favorite = await Favorite.create({
          user: req.user.id,
          productId,
        });

         return res.json({favorite, message:'Товар добавлен в избранные'});
      }
     
    
     
    } catch (e) {
      return res.status(401).json(e.toString());
    }
  },
  //   createFavorite: async function (req, res, next) {
  //   console.log(req.body)

  //   const { productId } = req.body
  //   console.log(productId)
  //   try {
  //     let favorite = await Basket.findOne({user: req.user.id}).populate('productId');
  //     if(!basket){
  //       basket = await Basket.create({
  //         user: req.user.id,
  //         productId,
  //         quantity:1

  //       })
  //     }else{
  //      productId.filter()
  //      favorite.productId.push(productId)


  //       await basket.save();
  //     }

  //     return res.json(basket)
  //   }catch (e) {
  //     return res.status(401).json("Ошибка"+ e.toString())
  //   }

  // } ,
  deleteFavoriteById: async function (req, res) {
    const { id } = req.params;
    console.log(id)
    try {
      const favorite = await Favorite.findById(id);
      // if (favorite.user.toString() === req.user.id) {
        await Favorite.findByIdAndRemove(id);
      
        const product = await Product.findById(favorite.productId);
        product.checkHeart=!product.checkHeart
        product.save(); 
         return res.json({id, message:'Товар  удален из избранных' });
      // }
      // return res.status(401).json("Ошибка. Нет доступа");
    } catch (e) {
      return res.status(401).json("Ошибка" + e.toString());
    }
  },
  // addProductToFavorite: async function (req, res) {
  //   const { id } = req.params;
  //   try {
  //     const favorite = await Favorite.findById(id);
  //     if (favorite.user.toString() === req.user.id) {
  //       const favorites = await Favorite.findByIdAndUpdate(id, {
  //         $push: { favorites: req.body.favorites },
  //       });
  //       res.json(favorites);
  //     }
  //   } catch (error) {
  //     console.log(error.toString());
  //   }
  // },

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
      const favorite = await Favorite.find({user: req.user.id}).populate({
        path: 'productId',
        populate: {
          path: 'sizes',
          model: 'Size'
        }
      });
   
   
 
      res.json(favorite);
    } catch (e) {
      return res.status(401).json("Ошибка"+ e.toString())
    }
},
}
