// src/components/EditUserModal.jsx
import { Modal, Form, Input } from "antd";
import { useEffect } from "react";

export default function EditUserModal({ user, onClose, onSave }) {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      name: user.name,
      email: user.email,
      phone: user.phone,
      website: user.website,
      company: user.company?.name,
    });
  }, [user, form]);

  const handleOk = () => {
    form.validateFields().then((values) => {
      onSave({
        ...user,
        ...values,
        company: { ...user.company, name: values.company },
      });
    });
  };

  return (
    <Modal
      open={true}
      title="Edit User"
      onCancel={onClose}
      onOk={handleOk}
      okText="Save"
    >
      <Form form={form} layout="vertical">
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="Phone">
          <Input />
        </Form.Item>
        <Form.Item name="website" label="Website">
          <Input />
        </Form.Item>
        <Form.Item name="company" label="Company">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}
