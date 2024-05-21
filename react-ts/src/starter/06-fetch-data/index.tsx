import { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

type User = {
  id: number;
  name: string;
};

export default function Fetch() {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : <p>{users.length} users loaded.</p>}
      {error && <p>{error.message}</p>}
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
}
