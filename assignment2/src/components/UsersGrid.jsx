import React, { useState } from "react";
import { Row, Col } from "antd";
import UserCard from "./UserCard";

export default function UsersGrid({ users, setUsers }) {
  const [editing, setEditing] = useState(null);

  const handleDelete = (id) => {
    console.log("Deleting id:", id);
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <>
      <Row gutter={[16, 16]}>
        {users.map((user) => (
          <Col xs={24} sm={12} md={8} lg={6} key={user.id}>
            <UserCard
              user={user}
              onEdit={() => setEditing(user)}
              onDelete={() => handleDelete(user.id)}
            />
          </Col>
        ))}
      </Row>

      {/* Example: editing modal would go here (not required to test delete) */}
    </>
  );
}
