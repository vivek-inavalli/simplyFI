import React, { useEffect, useState } from "react";
import UsersList from "./components/UsersList";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold mb-6 text-center sm:text-left">
          User Profiles
        </h1>
        <UsersList users={users} />
      </div>
    </div>
  );
}
