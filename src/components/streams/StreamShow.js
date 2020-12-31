import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import flv from "flv.js";
import { fetchStream } from "../../actions";

const StreamShow = () => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const stream = useSelector(state => state.streams[id]);
  useEffect(() => {
    dispatch(fetchStream(id));
  }, []);

  useEffect(() => {
    buildPlayer();

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  });

  const buildPlayer = () => {
    if (playerRef.current || !stream) {
      return;
    }
    playerRef.current = flv.createPlayer({
      type: "flv",
      url: `${process.env.REACT_APP_RTMP_SERVER_URL}/live/${id}.flv`,
    });
    playerRef.current.attachMediaElement(videoRef.current);
    playerRef.current.load();
  };
  return (
    <div>
      {stream && (
        <div>
          <video ref={videoRef} style={{ width: "100%" }} controls />
          <h1>{stream.title}</h1>
          <h5>{stream.description}</h5>
        </div>
      )}
    </div>
  );
};

export default StreamShow;
