import React from "react";
import UserCard from "./UserCard";

export default function UsersList({ users }) {
  return (
    <div className="grid gap-6">
      {users.map((u) => (
        <UserCard key={u.id} user={u} />
      ))}
    </div>
  );
}
