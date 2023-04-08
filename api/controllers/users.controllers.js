// const User = require("../models/User.model");
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const uuid = require('uuid');
// const Token = require('../models/Token.model')
const { userService } = require('../servise/user-service');

module.exports.userscontroller = {

registration: async function(req, res, next){
  try{
    const {login, password} = req.body;
    const userData = await userService.registration(login, password);
    res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
    return res.json(userData);

  }catch(e){
    console.log(e)

  }
},
login: async function(req, res, next){
  try{

  }catch(e){
    
  }
},
logout: async function (req, res, next){
  try{

  }catch(e){
    
  }
},
activate: async function (req, res, next){
  try{

  }catch(e){
    
  }
},
refresh: async function (req, res, next){
  try{

  }catch(e){
    
  }
},
getUsers: async function (req, res, next){
  try{

  }catch(e){
    
  }
},
  //   registerUser: async function (req, res) {
  //     const { login, password  } = req.body;
  //     const candidate = await User.findOne({login});
  //     if(candidate){
  //       return res.status(400).json(
  //             `Ошибка при регистрации, пользователь с таким адресом ${login} уже существует`
  //           )
  //     }
  //     const passwordToString = password.toString()
  //        const hash = await bcrypt.hash(passwordToString , Number(process.env.BCRYPT_ROUNDS));
  //        const activationLink = uuid.v4();
  //     const user = await User.create({
  //           login:login,
  //           password: hash,
  //           activationLink
            
  //       });
  //       await sendActivationMail(login, activationLink)
  //       const tokens = Token.generateTokens(user)
      
      
  //       try{
  //          const { login, password  } = req.body;
  //          const passwordToString = password.toString()
  //          const hash = await bcrypt.hash(passwordToString , Number(process.env.BCRYPT_ROUNDS));
  //       const user = await User.create({
  //           login: login,
  //           password: hash,
            
  //       });
  //       res.json(user);
  //       }catch(error){
  //         return res.status(400).json(
  //           "Ошибка при регистрации, пользователь с таким логином уже существует"
  //         )
 
  //       }
       
  //     },

      
  //     login: async (req, res) => {
  //       const { login, password } = req.body;
  //       const candidate = await User.findOne({ login });
  //       if (!candidate) {
          
  //         return res.status(401).json({
  //           error:"Неверный логин"});
  //       }
  //       const valid = await bcrypt.compare(password, candidate.password);
  //       if (!valid) {
  //         return res.status(401).json({
  //           error:"Неверный пароль"});
  //       }
      
  //       const payload = {
  //         id: candidate._id,
  //         login: candidate.login,
  //       };
  //       const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
  //         expiresIn: "24h",
  //       });
  //       res.json({
  //         token: token,
  //       });  
  //       return res.json('вы авторизированы');
  //     },
    
  // deleteUserById: async function (req, res) {
  //   try {
  //     const user = await User.findByIdAndRemove(req.params.id);
  //     res.json("Пользователь удален");
  //   } catch (error) {
  //     console.log(error.toString());
  //   }
  // },

  // getUsers: async function (req, res) {
  //   try {
  //     const users = await User.find();
  //     res.json(users);
  //   } catch (error) {
  //     console.log(error.toString());
  //   }
  // },
  

};