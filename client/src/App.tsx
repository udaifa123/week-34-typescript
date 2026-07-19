import { useUsers } from "./hooks/useUsers";
import UserCard from "./components/UserCard";

function App() {
  const { users } = useUsers();

  return (
    <div>
      <h1>Users</h1>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;