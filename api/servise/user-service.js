const User = require('../models/User.model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const {mailService} = require('./mail-service');

const {tokenService} = require('./token-service');
const UserDto = require('../dtos/user-dto')
module.exports.userService = {
    registration: async function (login, password) {
const candidate = await User.findOne({login});
if(candidate){
    
    throw new Error(`Пользователь с почтовым адресом ${login} уже существует`)
}
const hash = await bcrypt.hash(password, 3)
const activationLink = uuid.v4();
const user = await User.create({login, password: hash, activationLink})
await mailService.sendActivationMail(login, `${process.env.API_URL}/activate/${activationLink}`);
console.log(mailService)
const userDto = new UserDto(user);
const tokens = tokenService.generateTokens({...userDto});

await tokenService.saveToken(userDto.id, tokens.refreshToken);
return {
    ...tokens,
    user: userDto
}

      }}