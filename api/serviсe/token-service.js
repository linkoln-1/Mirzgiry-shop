const jwt = require('jsonwebtoken');
const Token = require('../models/Token.model')
module.exports.tokenService = {
   generateTokens:  function (payload) {
        const accesToken = jwt.sign(payload,process.env.JWT_ACCESS_SECRET, {expiresIn:  "24h"})
        const refreshToken = jwt.sign(payload,process.env.JWT_REFRESH_SECRET, {expiresIn:  "30d"})
        return {
          accesToken,
          refreshToken
        }
     },
     validateAccessToken: async function (token){
        try{
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
         
            return userData;

        }catch(e){
           return null;
        }

     },
     validateRefreshToken: async function (token){
        try{
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
            return userData;

        }catch(e){
           return null;
        }

     },
  saveToken: async function (userId, refreshToken){
    const tokenData = await Token.findOne({user:userId});
    if(tokenData){
        tokenData.refreshToken = refreshToken;
        return tokenData.save();
    }
    const token = await Token.create({user: userId, refreshToken})
    return token;

   },
   removeToken: async function(refreshToken){
    const tokenData = await Token.deleteOne({refreshToken});
   
   return tokenData;
    
   },
   findToken: async function(refreshToken){
    const tokenData = await Token.findOne({refreshToken});
  
   return tokenData;
    
   },


     }