"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.registerUser = exports.loginUser = void 0;
const User_1 = require("../models/User");
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const emailLog = req.body.email;
    const passwordLog = req.body.password;
    const user = yield User_1.User.findAll({
        where: {
            email: emailLog,
            password: passwordLog
        }
    });
    if (user.length > 0) {
        res.status(200).send({ data: "Logado com sucesso", user });
    }
    else {
        res.status(400).send({ data: "Usuario incorreto" });
    }
});
exports.loginUser = loginUser;
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const newUser = {
        name,
        email,
        password
    };
    if (name !== '' && email !== '' && password !== '') {
        const user = yield User_1.User.create(newUser);
        res.status(200).send({ data: "Usuario cadastro com sucesso" });
    }
    else {
        res.status(400).send({ data: "Usuario não cadastrado" });
    }
});
exports.registerUser = registerUser;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.User.findAll();
    res.status(200).send(JSON.stringify(user));
});
exports.getUser = getUser;
