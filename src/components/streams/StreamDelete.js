import React, { useEffect } from "react";
import { Button, Space } from "antd";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";

const StreamDelete = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const stream = useSelector(state => state.streams[id]);
  useEffect(() => {
    dispatch(fetchStream(id));
  }, []);
  const actions = (
    <Space size={"small"}>
      <Button onClick={() => dispatch(deleteStream(id))} type="primary">
        Delete
      </Button>
      <Button>
        <Link to="/">Cancel</Link>
      </Button>
    </Space>
  );
  return (
    <Modal
      title={"Delete Stream"}
      content={`Are you sure to delete stream ${stream && stream.title}`}
      actions={actions}
      onDismiss={() => history.push("/")}
    />
  );
};

export default StreamDelete;
