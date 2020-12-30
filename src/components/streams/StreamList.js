import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Button, Space } from "antd";
import { DesktopOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import { fetchStreams } from "../../actions";

const renderAdmin = (stream, userId) => {
  if (stream.userId === userId) {
    return (
      <Space size="small" style={{ float: "right" }}>
        <Button type="primary">
          <Link to={`/streams/edit/${stream.id}`}>Edit</Link>
        </Button>
        <Button type="primary" danger>
          Delete
        </Button>
      </Space>
    );
  }
  return null;
};

const renderCreate = isSignedIn => {
  if (isSignedIn) {
    return (
      <Button type="primary" style={{ float: "right" }}>
        <Link to="/streams/new">Create</Link>
      </Button>
    );
  }
  return null;
};

const StreamList = () => {
  const dispatch = useDispatch();
  const [streams, userId, isSignedIn] = useSelector(state => [
    Object.values(state.streams),
    state.auth.userId,
    state.auth.isSignedIn,
  ]);

  useEffect(() => {
    dispatch(fetchStreams());
  }, []);

  return (
    <div>
      <List
        header="Streaming List"
        itemLayout="horizontal"
        dataSource={streams}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<DesktopOutlined />}
              title={<a href="">{item.title}</a>}
              description={item.description}
            />
            {renderAdmin(item, userId)}
          </List.Item>
        )}
      />
      {renderCreate(isSignedIn)}
    </div>
  );
};

export default StreamList;
