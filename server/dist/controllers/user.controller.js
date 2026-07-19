"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.createUser = exports.getUsers = void 0;
let users = [];
const getUsers = (req, res) => {
    res.json(users);
};
exports.getUsers = getUsers;
const createUser = (req, res) => {
    users.push(req.body);
    res.json(users);
};
exports.createUser = createUser;
const deleteUser = (req, res) => {
    const id = Number(req.params.id);
    users = users.filter(u => u.id !== id);
    res.json(users);
};
exports.deleteUser = deleteUser;
