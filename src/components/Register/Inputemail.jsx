import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { FaRegEnvelopeOpen } from "react-icons/fa";

export const Inputemail = ({ className, value, name, placeholder, onChange }) => {
  return (
    <Input
      size="large"
      className={className}
      prefix={<FaRegEnvelopeOpen style={{ color: "#d06000" }} />}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
