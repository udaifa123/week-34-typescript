"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useUsers_1 = require("./hooks/useUsers");
const UserCard_1 = __importDefault(require("./components/UserCard"));
function App() {
    const { users } = (0, useUsers_1.useUsers)();
    return (<div>
      <h1>Users</h1>
      {users.map(user => (<UserCard_1.default key={user.id} user={user}/>))}
    </div>);
}
exports.default = App;
