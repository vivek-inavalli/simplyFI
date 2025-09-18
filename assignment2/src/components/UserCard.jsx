import React from "react";
import { Card, Popconfirm } from "antd";
import {
  HeartOutlined,
  EditOutlined,
  DeleteOutlined,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

export default function UserCard({ user, onEdit, onDelete }) {
  if (!user) return null;

  const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${encodeURIComponent(
    user.username
  )}.svg?options[mood][]=happy`;

  return (
    <Card
      cover={
        <img
          alt={user.username}
          src={avatarUrl}
          style={{ objectFit: "cover", height: 180 }}
        />
      }
      actions={[
        <HeartOutlined
          key="like"
          onClick={() => console.log("like", user.id)}
        />,
        <EditOutlined key="edit" onClick={onEdit} />,
        <Popconfirm
          key="delete-confirm"
          title="Are you sure you want to delete this user?"
          onConfirm={onDelete}
          okText="Yes"
          cancelText="No"
        >
          {/* Child element that triggers popconfirm */}
          <DeleteOutlined key="delete" />
        </Popconfirm>,
      ]}
    >
      <Card.Meta
        title={user.name}
        description={
          <div style={{ marginTop: 8 }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <MailOutlined /> <span>{user.email}</span>
            </div>
            <div
              style={{
                display: "flex",
                gap: 8,
                alignItems: "center",
                marginTop: 6,
              }}
            >
              <PhoneOutlined /> <span>{user.phone}</span>
            </div>
            <div
              style={{
                display: "flex",
                gap: 8,
                alignItems: "center",
                marginTop: 6,
              }}
            >
              <GlobalOutlined /> <span>{user.website}</span>
            </div>
          </div>
        }
      />
    </Card>
  );
}
