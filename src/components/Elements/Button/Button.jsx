import React from "react";
import { Button, Space } from "antd";

export const Mybutton = ({ children, ...props }) => (
  <Space size="small" wrap>
    <Button type="primary" {...props}>
      {children}
    </Button>
  </Space>
);
