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
    // console.log(req.body.loginData)
console.log(req.body)
    const {sizes, productId } = req.body.loginData
    // console.log(productId)
    // console.log(sizes)
    try {
      


       const basket = await Basket.create({
          user: req.user.id,
          sizes,
          productId,
         

        })
 
     
// console.log(basket)
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
      if(basket.user.toString() === req.user.id){
        await  Basket.findByIdAndRemove(id);
        return res.json(id);
        
      }
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
    console.log(req.body.loginDataCount)
    try {
     let basket = await Basket.findById(req.body.loginDataCount.basketId).populate({
        path: 'productId',
        populate: {
          path: 'sizes',
          model: 'Size'
        }
      })
      if (req.body.loginDataCount.change === 'increment') {
     basket.productId[0].sizes[req.body.loginDataCount.indexSize].count+=1
     
      } else if (req.body.loginDataCount.change === 'decrement') {
      
        basket.productId[0].sizes[req.body.loginDataCount.indexSize].count-=1
    
      }
     
       

      await basket.save()
  console.log(basket.productId[0])
      res.json(req.body.loginDataCount);
    } catch (error) {
      console.log(error.toString());
    }
  },
  
  // changeBasketById: async function (req, res) {
  //   console.log(req.body.loginData)
  //   try {
  //     const baskett = await Basket.findOne(req.params.id)
  //     console.log(baskett)
  //     const basket = await Basket.findByIdAndUpdate(req.params.id, {
      
  //       $inc: { "sizes.count": 1 },
  //       sizes: req.body.sizes,
  //       productId: req.body.productId,
  //     }, {
  //       arrayFilters: [{ 'sizes._id': req.body.loginData.sizeId }],
  //       new: true,
  //       upsert: true,
  //     }).populate({
  //       path: 'productId',
  //       populate: {
  //         path: 'sizes',
  //         model: 'Size'
  //       }
  //     });
  //     console.log(basket);
  //     res.json(basket);
  //   } catch (error) {
  //     console.log(error.toString());
  //   }
  // },
  
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
