const Basket = require("../models/Basket.model");
const mongoose = require('mongoose');

module.exports.basketscontroller = {
  //   createBasket: async function (req, res) {
  //   const {product} = req.body;

  //   try {
  //     let basket = await Basket.findOne({ user: req.user.id }); // поиск корзины пользователя

  //     if (!basket) {
  //       // если у пользователя еще нет корзины, создаем новую
  //       basket = await Basket.create({
  //         user: req.user.id,
  //         products: [{ product,  quantity: 1 }] // добавляем новый товар в корзину
  //       });
  //     } else {
  //       // если корзина пользователя уже существует, добавляем товар к существующим
  //       const existingItem = basket.products.find(item => item.product === product);
  //       if (existingItem) {
  //         // если товар уже есть в корзине, увеличиваем количество
  //         existingItem.quantity += 1;
  //       } else {
  //         // если товара еще нет в корзине, добавляем новый элемент
  //         basket.products.push({ product, quantity: 1 });
  //       }

  //       await basket.save(); // сохраняем обновленную корзину в базе данных
  //     }

  //     return res.json(basket);
  //   } catch (e) {
  //     return res.status(401).json(e.toString());
  //   }
  // },
  createBasket: async function (req, res, next) {

console.log(req.body)
    const {sizes, productId} = req.body.loginData
    try {
       const basket = await Basket.create({
          user: req.user.id,
          sizes,
          productId,

        })

      return res.json(basket)
    }catch (e) {
      return res.status(401).json("Ошибка"+ e.toString())
    }

  } ,
  // createBasket: async function (req, res, next) {
  //   console.log(req.body)

  //   const {sizes, productId } = req.body
  //   console.log(productId)
  //   try {
  //     let basket = await Basket.findOne({user: req.user.id});
  //     if(!basket){
  //       basket = await Basket.create({
  //         user: req.user.id,
  //         sizes,
  //         productId,
  //         quantity:1

  //       })
  //     }else{
  //       basket.sizes.push(sizes)
  //       basket.productId.push(productId)

  //       await basket.save();
  //     }

  //     return res.json(basket)
  //   }catch (e) {
  //     return res.status(401).json("Ошибка"+ e.toString())
  //   }

  // } ,

  deleteBasketById: async function (req, res) {

    const { id } = req.params;
    try{
      const basket =  await  Basket.findById(id);
      // if(basket.user.toString() === req.user.id){
        await  Basket.findByIdAndRemove(id);
        return res.json(id);
        
      // }
      return res.status(401).json("Ошибка. Нет доступа")

    }catch(e){
      return res.status(401).json("Ошибка"+ e.toString())
    }

  },

  addProductToBasket: async function(req, res, next) {
    const {items, sizes} = req.body;
    try {
      let basket = await Basket.findOne({ user: req.user.id });
      update = await Basket.findOneAndUpdate(basket._id,{
        $push: { items, sizes },

      });

      return res.json(update);
    } catch (e) {
      return res.status(401).json("Ошибка"+ e.toString())
    }
  },

  changeBasketById: async function (req, res) {
  //   try {
  //     const { loginDataCount } = req.body;
  //     let {  indexSize, change, count } = loginDataCount;
  
  //       console.log(loginDataCount);
    
  //       const baskete = await Basket.findById(req.params.id)
  //       let basket = await Basket.findByIdAndUpdate(
  //         req.params.id,
  //         {
  //           $set: {
  //           [`productId${0}.sizes.${indexSize}.count`]: change === "increment" ? count : count,
  //           },
  //         },
  //         {
  //           new: true,
  //           arrayFilters: [
  //             { "product._id": baskete.productId[0]._id },
  //             { "size._id": baskete.productId[0].sizes[indexSize]._id },
  //           ],
  //         }
  //       ).populate({
  //         path: "productId",
  //         populate: {
  //           path: "sizes",
  //           model: "Size",
  //         },
  //       });
        
  //       basket.markModified("productId");
  //       await basket.save();
  
  //     res.json({loginDataCount: loginDataCount, basket: basket});
  //   } catch (error) {
  //     console.log(error.toString());
  //   }
  // },
    const { loginDataCount } = req.body;
   let { basketId,indexSize, change, count } = loginDataCount;
  
    console.log(loginDataCount);
  
    try {
      let basket = await Basket.findByIdAndUpdate(req.params.id).populate({
        path: 'productId',
        populate: {
          path: 'sizes',
          model: 'Size'
        }
      });
  
      switch (change) {
        case 'increment':
          basket.productId[0].sizes[indexSize].count = count+1;
          break;
        case 'decrement':
          basket.productId[0].sizes[indexSize].count = count-1;
          break;
        default:
          throw new Error('Invalid change operation');
      }
   
      basket.markModified(`productId.0.sizes.${indexSize}.count`);
      await basket.save();
      console.log(basket.productId[0]);
  
      res.json({loginDataCount: loginDataCount, basket: basket});
    } catch (error) {
      console.log(error.toString());
      res.status(500).json({ error: error.toString() });
    }
  },
  
  

  
  getBaskets: async function (req, res, next) {
    try {
      const basket = await Basket.find({user: req.user.id}).populate({
        path: 'productId',
        populate: {
          path: 'sizes',
          model: 'Size'
        }
      });
      res.json(basket);
    } catch (e) {
      return res.status(401).json("Ошибка"+ e.toString())
    }
  },

};
