import { Form, Input, Button, Modal } from "antd";
import { userFormConfig } from "../config/user-form-config";
import { Validator } from "../utils/validator";
import { useEffect } from "react";
import { CustomButton } from "../utils/custom-button";

const UserFormModal = ({ open, onClose, onSubmit, initialValues }) => {
  const [form] = Form.useForm();



  const handleFinish = (values) => {
    onSubmit(values);
    form.resetFields();
  };

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    } else {
      form.resetFields();
    }
  }, [initialValues, form]);

  return (
    <Modal
      open={open}
      title={
        <span className="text-lg font-semibold text-gray-800">
          {initialValues ? "Edit User" : "Create User"}
        </span>
      }
      onCancel={onClose}
      footer={null}
      destroyOnClose
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        className="space-y-2"
      >
        {userFormConfig.map((field) => (
          <Form.Item
            key={field.name}
            label={field.label}
            name={field.name}
            rules={[
              {
                required: field.required,
                message: `${field.label} is required`,
              },
              field.type === "email" && {
                validator: (_, value) => {
                  const v = new Validator(value || "");
                  return v.email()
                    ? Promise.resolve()
                    : Promise.reject("Invalid email");
                },
              },
            ]}
          >
            <Input />
          </Form.Item>
        ))}

        <div className="flex justify-end gap-2 pt-4">
          <Button onClick={onClose}>Cancel</Button>
          
          <CustomButton
            label={initialValues ? "Save Changes" : "Create User"}
            htmlType="submit"

          />
        </div>
      </Form>
    </Modal>
  );
};

export default UserFormModal;
