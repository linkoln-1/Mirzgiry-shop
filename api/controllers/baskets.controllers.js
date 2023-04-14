const Basket = require("../models/Basket.model");


module.exports.basketscontroller = {
  createBasket: async function (req, res) {
    const {shop} = req.body
    try {
     const basket = await Basket.create({
        user: req.user.id,
        shop

      });
      return res.json(basket);
    } catch (e) {
      return res.status(401).json(e.toString())
    }
  },
  deleteBasketById: async function (req, res) {
    const { id } = req.params;
    try{
      const basket =  await  Basket.findById(id);
      if(basket.user.toString() === req.user.id){
        await  Basket.findByIdAndRemove(id);
        return res.json('удалено');
      }
      return res.status(401).json("Ошибка. Нет доступа")

    }catch(e){
        return res.status(401).json("Ошибка"+ e.toString())
    }

  },
  // changeCartById: async function (req, res) {
  //   try {
  //     const basket = await Basket.findByIdAndUpdate(req.params.id, {
  //      user: req.body.user,
  //      shop: req.body.shop,

  //     });
  //     res.json("Корзина изменена");
  //   } catch (error) {
  //     console.log(error.toString());
  //   }
  // },
  getBaskets: async function (req, res) {
    try {
      const basket = await Basket.find({user: req.user.id});
      res.json(basket);
    } catch (e) {
      return res.status(401).json("Ошибка"+ e.toString())
    }
  },

};
