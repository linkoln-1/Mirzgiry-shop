const ApiError = require('../../exceptions/api-error')
const {tokenService }= require('../../serviсe/token-service');
const { UnauthorizedError } = require('../../exceptions/api-error');
module.exports =  async function (req, res, next) {
try{
  const authorizationHeader = req.headers.authorization;
  if(!authorizationHeader){
    // return next(ApiError.UnauthorizedError());
    // return next((UnauthorizedError()))
    return res.status(401).json("Пользователь не авторизован")
  }
  const accessToken = authorizationHeader.split(" ")[1];
 
  if(!accessToken){
    // return next(ApiError.UnauthorizedError());
    return res.status(401).json("Пользователь не авторизован")
    // return next((UnauthorizedError()))
  }
  const userData = await tokenService.validateAccessToken(accessToken);
  if(!userData){
    return res.status(401).json("Пользователь не авторизован")
    // return next((UnauthorizedError()))
    // return next(ApiError.UnauthorizedError());
  }
 req.user = userData;




  next();
   
} catch(e){
  // return next((UnauthorizedError(e)))
  return res.status(401).json("Пользователь не авторизован"+e.toString())

}
}
















// const jwt = require('jsonwebtoken')
// module.exports = async (req, res, next)=>{
   
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
        
//         next()
    
//       }catch(e){
//           return res.status(401).json("Ошибка авторизации:" + e.toString())
//       }
// }