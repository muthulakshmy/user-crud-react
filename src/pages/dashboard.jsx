import { useEffect, useState } from "react";
import {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
} from "../api/user.api";
import { notification } from "antd";
import UserTable from "../components/user-table";
import UserFormModal from "../components/user-form";
import DeleteUserModal from "../components/delete-user";
import { CustomButton } from "../utils/custom-button";

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [deleteUserData, setDeleteUserData] = useState(null);
    const [value, setValue] = useState("");

    const fetchUsers = async () => {
        try {
            const res = await getUsers();
            setUsers(res.data);
        } catch {
            notification.error({ message: "Failed to load users" });
        }
    };

    const handleCreateUser = () => {
        setEditingUser(null);
        setIsFormOpen(true);
    }

    const onClose = () => {
        setEditingUser(null);
        setIsFormOpen(false);
    }

    const onCloseDelete = () => {
        setDeleteUserData(null);
        setValue("");
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleSubmit = async (data) => {
        try {
            if (editingUser) {
                await updateUser(editingUser.id, {
                    ...editingUser,
                    ...data,
                });
                notification.success({ message: "User updated successfully" });
            } else {
                await createUser(data);
                notification.success({ message: "User created successfully" });
            }
            setIsFormOpen(false);
            setEditingUser(null);
            fetchUsers();
        } catch {
            notification.error({ message: "Something went wrong" });
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteUser(id);
            notification.success({ message: "User deleted successfully" });
            setDeleteUserData(null);
            setValue("");
            fetchUsers();

        } catch {
            notification.error({ message: "Delete failed" });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center">
            <div className="w-full max-w-6xl px-6 py-10 space-y-6">

                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold text-gray-600">
                        User Dashboard
                    </h1>

                    <CustomButton
                        label="+ Create User"
                        onClick={handleCreateUser}
                        className="ml-3   focus:outline-none"
                    />
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                    <UserTable
                        data={users}
                        onEdit={(user) => {
                            setEditingUser(user);
                            setIsFormOpen(true);
                        }}
                        onDelete={(id) =>
                            setDeleteUserData(users.find((u) => u.id === id))
                        }
                    />
                </div>

                <UserFormModal
                    open={isFormOpen}
                    onClose={() => onClose()}
                    onSubmit={handleSubmit}
                    initialValues={editingUser}
                />

                <DeleteUserModal
                    open={!!deleteUserData}
                    user={deleteUserData}
                    onClose={() => onCloseDelete()}
                    onConfirm={handleDelete}
                    value={value}
                    setValue={setValue}
                />
            </div>
        </div>
    );
};

export default Dashboard;
