import React from "react";
import Modal from "../Modal";
import { Button, Space } from "antd";
import history from "../../history";

const StreamDelete = () => {
  const actions = (
    <Space size={"small"}>
      <Button type="primary">Delete</Button>
      <Button>Cancel</Button>
    </Space>
  );
  return (
    <div>
      StreamDelete
      <Modal
        title={"Delete Stream"}
        content={"Are you sure to delete stream"}
        actions={actions}
        onDismiss={() => history.push("/")}
      />
    </div>
  );
};

export default StreamDelete;
