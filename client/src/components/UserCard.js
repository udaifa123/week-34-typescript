"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserCard = ({ user }) => {
    return (<div>
      <h3>{user.name}</h3>
      <p>Age: {user.age}</p>
    </div>);
};
exports.default = UserCard;
