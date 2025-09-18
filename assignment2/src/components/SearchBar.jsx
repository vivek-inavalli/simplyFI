// src/components/SearchBar.jsx
import { Input } from "antd";

export default function SearchBar({ onSearch }) {
  return (
    <Input.Search
      placeholder="Search by name, email, or company..."
      onChange={(e) => onSearch(e.target.value)}
      style={{ marginBottom: "16px" }}
      allowClear
    />
  );
}
