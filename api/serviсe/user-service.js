const User = require("../models/User.model");
const Product = require("../models/Product.model");
const Favorite = require("../models/Favorite.model");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const instance = require("./mail-service");
const ApiError = require("../exceptions/api-error");
const { tokenService } = require("./token-service");
const UserDto = require("../dtos/user-dto");
module.exports.userService = {
  registration: async function (login, password) {
    const candidate = await User.findOne({ login });
    if (candidate) {
      throw ApiError.BadRequest(
        `Пользователь с почтовым адресом ${login} уже существует`
      );
    }
    const hash = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();
    const user = await User.create({ login, password: hash, activationLink });
    await instance.sendActivationMail(
      login,
      `http://localhost:5000/activate/${activationLink}`
    );

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  },
  activate: async function (activationLink) {
    const user = await User.findOne({ activationLink });
    if (!user) {
      throw ApiError.BadRequest(`Некорректная ссылка активации`);
    }
    user.isActivated = true;
    await user.save();
  },
  login: async function (login, password) {
    const user = await User.findOne({ login });
    if (!user) {
      throw ApiError.BadRequest(`Неправильный логин`);
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw ApiError.BadRequest(`Неправильный пароль`);
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  },
  logout: async function (refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  },
  refresh: async function (refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnautharizedError();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);

    const tokenFromOb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromOb) {
      throw ApiError.UnautharizedError();
    }
    const user = await User.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  },
  getUsers: async function () {
    const users = await User.find();
    return users;
  },
};
