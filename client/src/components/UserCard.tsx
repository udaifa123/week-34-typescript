import type { User } from "../types/user";

interface Props {
  user: User;
}

const UserCard = ({ user }: Props) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default UserCard;