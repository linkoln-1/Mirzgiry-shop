const History = require("../models/History.model");
const mongoose = require('mongoose');

module.exports.historycontroller = {
 
  createHistory: async function (req, res, next) {

    console.log(req.body);
    const { basket, totalPrice } = req.body.loginData;
    // const baskets = await Basket.find({user: req.user.id})
try {
    const lastHistory = await History.findOne().sort({ _id: -1 }).limit(1);
    let count = 1;

    if (lastHistory) {
        count = lastHistory.count + 1;
    }

    const history = await History.create({
        user: req.user.id, 
        date: new Date(),
        count: count,
        basket,
        totalPrice,
    });

    return res.json(history);
} catch (e) {
    return res.status(401).json("Ошибка" + e.toString());
}
  } ,
//   addBasketToHistory: async function(req, res, next) {
//     const { basket, totalPrice } = req.body.loginData;
//   try {
//     let history = await History.findOne({ user: req.user.id });
//     let update;
//     if (!history) {
//       history = await History.create({
//         user: req.user.id,
//         data,
//         count,
//         basket,
//         totalPrice,
//       });
//       update = await History.findOneAndUpdate({ _id: history._id }, {
//         $push: { basket, totalPrice },
//       });
//     } else {
//       history = await History.create({
//         user: req.user.id,
//         data,
//         count,
//         basket,
//         totalPrice,
//       });
//       update = await History.findOneAndUpdate({ _id: history._id }, {
//         $push: { basket, totalPrice },
//       });
//     }
//     return res.json(update);
//   } catch (e) {
//     return res.status(401).json("Ошибка"+ e.toString())
//   }},
 
  deleteHistoryById: async function (req, res) {

    const { id } = req.params;
    try{
      const basket =  await  History.findById(id);
      // if(basket.user.toString() === req.user.id){
        await  History.findByIdAndRemove(id);
        return res.json(id);
        
      // }
      // return res.status(401).json("Ошибка. Нет доступа")

    }catch(e){
      return res.status(401).json("Ошибка"+ e.toString())
    }

  },

 

  

  
  getHistiries: async function (req, res, next) {
    try {
      const basket = await History.find({user: req.user.id}).populate({
        path: 'basket',
        options: { preserveNullAndEmptyArrays: true },
        populate: {
          path: 'productId',
          model: 'Product'
        }
        
      });
      res.json(basket);
    } catch (e) {
      return res.status(401).json("Ошибка"+ e.toString())
    }
  },

};
