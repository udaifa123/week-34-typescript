"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUsers = void 0;
const react_1 = require("react");
const api_1 = require("../services/api");
const useUsers = () => {
    const [users, setUsers] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        api_1.API.get("/users")
            .then(res => setUsers(res.data))
            .catch(err => console.error(err));
    }, []);
    return { users };
};
exports.useUsers = useUsers;
