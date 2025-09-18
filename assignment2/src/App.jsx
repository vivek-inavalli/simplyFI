import React, { useEffect, useState } from "react";
import { Spin } from "antd";
import UsersGrid from "./components/UsersGrid";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div
        style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}
      >
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div style={{ padding: 24, maxWidth: 1200, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 16 }}>User Directory</h1>
      <UsersGrid users={users} setUsers={setUsers} />
    </div>
  );
}
