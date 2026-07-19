import { useEffect, useState } from "react";
import { API } from "../services/api";
import type { User } from "../types/user";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    API.get<User[]>("/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return { users };
};