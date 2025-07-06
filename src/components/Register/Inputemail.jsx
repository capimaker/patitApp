import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { FaRegEnvelopeOpen } from "react-icons/fa";

export const Inputemail = ({
  className,
  value,
  name,
  placeholder,
  onChange,
}) => {
  return (
    <div className={className}>
      <Input
        prefix={<FaRegEnvelopeOpen style={{ color: "#d06000" }} />}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
