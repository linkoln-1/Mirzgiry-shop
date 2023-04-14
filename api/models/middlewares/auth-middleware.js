<<<<<<< HEAD
const ApiError = require('../../exceptions/api-error');
const {tokenService }= require('../../servise/token-service');

module.exports = async function (req, res, next) {
try{
  const authorizationHeader = req.headers.authorization;
  if(!authorizationHeader){
    return next(ApiError.UnauthorizedError());
  }
  const accessToken = authorizationHeader.split(" ")[1];
 
  if(!accessToken){
    return next(ApiError.UnauthorizedError());
  }
  const userData =  await tokenService.validateAccessToken(accessToken);
  if(!userData){
    return next(ApiError.UnauthorizedError());
  }
req.user = userData;
  
  next();
   
} catch(e){
  return next(ApiError.UnauthorizedError())

}
}














=======
const ApiError = require("../../exceptions/api-error");
const { tokenService } = require("../../servise/token-service");

module.exports = async function (req, res, next) {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      return next(ApiError.UnautharizedError());
    }
    const accessToken = authorizationHeader.split(" ")[1];

    if (!accessToken) {
      return next(ApiError.UnautharizedError());
    }
    const userData = await tokenService.validateAccessToken(accessToken);
    if (!userData) {
      return next(ApiError.UnautharizedError());
    }
    req.user = userData;

    next();
  } catch (e) {
    return next(ApiError.UnautharizedError());
  }
};
>>>>>>> mern_mirzgiry


// const jwt = require('jsonwebtoken')
// module.exports = async (req, res, next)=>{
<<<<<<< HEAD
   
=======

>>>>>>> mern_mirzgiry
//     const { authorization } = req.headers;
//     if(!authorization){
//         return res.status(401).json('Нет авторизации')
//     }
//     const [type, token]=authorization.split(" ");
//     if (type !== "Bearer") {
//         return res.status(401).json("неверный тип токена");
//       }
//       try{
//         req.user = await jwt.verify(token, process.env.SECRET_JWT_KEY);
<<<<<<< HEAD
        
//         next()
    
//       }catch(e){
//           return res.status(401).json("Ошибка авторизации:" + e.toString())
//       }
// }
=======

//         next()

//       }catch(e){
//           return res.status(401).json("Ошибка авторизации:" + e.toString())
//       }
// }
>>>>>>> mern_mirzgiry
