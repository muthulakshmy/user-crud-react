import React from "react";
import { Button, ConfigProvider } from "antd";
export const CustomButton = ({ label, onClick, icon, className = "", ...rest }) => {
    return (
        <ConfigProvider theme={{
            components: {
                Button: {
                    defaultHoverBg: "#16aaac",
                    defaultHoverBorderColor: "none",
                    defaultHoverColor: "white",
                    defaultActiveBg: "#16aaac",
                    defaultActiveBorderColor: "#08979D",
                    defaultActiveColor: "white",
                    defaultBorderColor: "none",
                    defaultBg: "#08979D",
                    defaultColor: "white",
                    borderWidth: "2px",
                },
            },
        }}>
            <Button
                className={`rounded-sm ${className}`}
                onClick={onClick}
                icon={icon}
                {...rest}
            >
                {label}
            </Button>
        </ConfigProvider>
    );
};