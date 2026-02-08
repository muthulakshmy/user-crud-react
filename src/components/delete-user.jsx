import { Modal, Input, Button, Typography } from "antd";

const DeleteUserModal = ({ open, onClose, user, onConfirm ,value,setValue }) => {
  

  const isMatch = value === user?.firstName;

  return (
    <Modal
      open={open}
      title="Confirm Delete"
      onCancel={onClose}
      footer={null}
      destroyOnClose
    >
      <Typography className="mb-2">
        Type <strong>{user?.firstName}</strong> to confirm deletion
      </Typography>

      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter first name"
      />

      <div className="flex justify-end gap-2 mt-4">
        <Button onClick={onClose}>Cancel</Button>
        <Button
          type="primary"
          danger
          disabled={!isMatch}
          onClick={() => onConfirm(user.id)}
        >
          Delete
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteUserModal;
