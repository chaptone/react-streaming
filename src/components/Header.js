import React from "react";
import { Menu, Layout } from "antd";

const Header = () => {
  return (
    <Layout.Header>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">Streamer</Menu.Item>
        <Menu.Item key="2" style={{ float: "right" }}>
          All Streams
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default Header;
