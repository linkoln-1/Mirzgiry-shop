const User = require("../models/User.model");
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const uuid = require('uuid');
// const Token = require('../models/Token.model')
const { validationResult } = require("express-validator");
const { userService } = require("../serviсe/user-service");
const ApiError = require("../exceptions/api-error");
module.exports.userscontroller = {
  registration: async function (req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(
          ApiError.BadRequest("ошибка при валидации", errors.array())
        );
      }
      const { login, password } = req.body;
      const userData = await userService.registration(login, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  },
  login: async function (req, res, next) {
    try {
      const { login, password } = req.body;
      const userData = await userService.login(login, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      return res.json(userData);
    } catch (e) {
      next(e);
    }
  },
  logout: async function (req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);
      res.clearCookie("refreshToken");
      return res.json(token);
    } catch (e) {
      console.log(e);
      next(e);
    }
  },
  activate: async function (req, res, next) {
    try {
      const activationLink = req.params.link;
      await userService.activate(activationLink);
      return res.redirect(`${process.env.CLIENT_URL}/registration/success`);
    } catch (e) {
      next(e);
    }
  },
  refresh: async function (req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await userService.refresh(refreshToken);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      return res.json(userData);
    } catch (e) {
      next(e);
    }
  },

  getUsers: async function (req, res, next) {
    try {
      const users = await userService.getUsers();
      return res.json(users);
    } catch (e) {
      next(e);
    }
  },

};
