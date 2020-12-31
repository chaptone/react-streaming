import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchStream } from "../../actions";

const StreamShow = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const stream = useSelector(state => state.streams[id]);
  useEffect(() => {
    dispatch(fetchStream(id));
  }, []);
  return (
    <div>
      {stream && (
        <div>
          <h1>{stream.title}</h1>
          <h5>{stream.description}</h5>
        </div>
      )}
    </div>
  );
};

export default StreamShow;
