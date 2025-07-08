import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { FaPaw } from "react-icons/fa";

export const Inputname = ({ className, value, name, placeholder, onChange }) => {
  return (
    <div className={className}>
      <Input
        prefix={<FaPaw style={{ color: "#d06000" }} />}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        size="large"
      />
    </div>
  );
};
