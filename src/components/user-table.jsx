import { Table, Button, ConfigProvider } from "antd";

const UserTable = ({ data, onEdit, onDelete }) => {
    const columns = [
        {
            title: "First Name",
            dataIndex: "firstName",
            className: "font-medium",
        },
        { title: "Last Name", dataIndex: "lastName" },
        { title: "Phone", dataIndex: "phone" },
        { title: "Email", dataIndex: "email" },
        {
            title: "Actions",
            align: "center",
            render: (_, record) => (
                <div className="flex justify-center gap-3">
                    <Button

                        onClick={() => onEdit(record)}
                    >
                        Edit
                    </Button>

                    <Button danger onClick={() => onDelete(record.id)}>
                        Delete
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <ConfigProvider theme={{
            components: {
                Table: {
                    rowSelectedBg: "#EAFAFA99",
                    rowSelectedHoverBg: "#eafafa",
                    headerSplitColor: "#D1D5DB",
                    headerBg: "#FAFAFA",
                    headerColor: "#374151",
                },
            }, token: {
                colorPrimary: "#08979D",
                borderRadius: 1,
            }
        }}>
            <Table
                rowKey="id"
                dataSource={data}
                columns={columns}
                pagination={{ pageSize: 5 }}
            />
        </ConfigProvider>

    );
};

export default UserTable;
