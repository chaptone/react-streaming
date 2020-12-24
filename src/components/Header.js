import React from "react";
import { Link } from "react-router-dom";
import { Menu, Layout } from "antd";
import GoogleAuth from "../GoogleAuth";

const Header = () => {
  return (
    <Layout.Header d>
      <Menu theme="dark" selectedKeys={[]} mode="horizontal">
        <Menu.Item key="1">
          <Link to="/">Streamer</Link>
        </Menu.Item>
        <Menu.Item key="3" style={{ float: "right" }}>
          <GoogleAuth />
        </Menu.Item>
        <Menu.Item key="2" style={{ float: "right" }}>
          <Link to="/">All Streams</Link>
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default Header;
