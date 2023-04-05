const User = require("../models/User.models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports.userscontroller = {
    registerUser: async function (req, res) {
        try{
           const { login, password  } = req.body;
           const passwordToString = password.toString()
           const hash = await bcrypt.hash(passwordToString , Number(process.env.BCRYPT_ROUNDS));
        const user = await User.create({
            login: login,
            password: hash,
            
        });
        res.json(user);
        }catch(error){
          return res.status(400).json("Такой пользователь уже существует!" + error.toString())
        }
       
      },

      
      login: async (req, res) => {
        const { login, password } = req.body;
        const candidate = await User.findOne({ login });
        if (!candidate) {
          
          return res.status(401).json({
            error:"Неверный логин"});
        }
        const valid = await bcrypt.compare(password, candidate.password);
        if (!valid) {
          return res.status(401).json({
            error:"Неверный пароль"});
        }
      
        const payload = {
          id: candidate._id,
          login: candidate.login,
        };
        const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
          expiresIn: "24h",
        });
        res.json({
          token: token,
        });  
        return res.json('вы авторизированы');
      },
    
  deleteUserById: async function (req, res) {
    try {
      const user = await User.findByIdAndRemove(req.params.id);
      res.json("Пользователь удален");
    } catch (error) {
      console.log(error.toString());
    }
  },
//   changeUserById: async function (req, res) {
//     try {
//       const user = await User.findByIdAndUpdate(req.params.id, {
//         // name: req.body.name,
//         // surname: req.body.sername,
//         // phone: req.body.phone, 
//         // mail: req.body.mail,
//         login: req.body.login,
//         password: req.body.password,
       
//       });
//       res.json("Пользователь изменен");
//     } catch (error) {
//       console.log(error.toString());
//     }
//   },
  getUsers: async function (req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.log(error.toString());
    }
  },
  

};