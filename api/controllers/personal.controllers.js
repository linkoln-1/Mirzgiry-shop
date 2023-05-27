const Personal = require("../models/Personal.model");


module.exports.personalcontroller = {

  addPersonal: async function(req, res) {
    const { name, surName,  email, phone, street,homeNumber} = req.body.loginData;
    console.log(req.body)
  try {
    let personal = await Personal.findOne({ user: req.user.id });
   
    if (!personal) {
     personal = await Personal.create({
        user: req.user.id,
        name,
        surName,
        email,
        phone,
        street,
        homeNumber
      });
     
    } else {
      personal = await Personal.findOneAndUpdate({user: req.user.id}, {name: name, surName: surName, email:email, phone: phone, street: street, homeNumber: homeNumber}, {new: true});
     return res.json(personal);
    }
   
  } catch (e) {
    return res.status(401).json("Ошибка"+ e.toString())
  }},

  getPersonal: async function (req, res) {
    try {
      const  personal = await Personal.find({user: req.user.id})
      res.json(personal);
    } catch (e) {
      return res.status(401).json("Ошибка"+ e.toString())
    }
  },

}