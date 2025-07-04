import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';

export const Inputname = ({className, value, name, placeholder, onChange}) => {
    
  
  return (
     
    <Input
    className = {className}
      value = {value}
      name = {name}
      placeholder = {placeholder}
      onChange = {onChange}
      prefix={<UserOutlined />}
      
    />
  );
};
