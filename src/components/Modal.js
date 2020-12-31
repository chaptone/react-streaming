import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ title, content, actions, onDismiss }) => {
  return ReactDOM.createPortal(
    <div
      onClick={onDismiss}
      style={{
        height: "100%",
        width: "100%",
        position: "fixed",
        left: "0",
        top: "0",
        backgroundColor: "rgb(0,0,0)",
        backgroundColor: "rgba(0,0,0,0.4)",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          backgroundColor: "white",
          margin: "15% auto",
          padding: "20px",
          height: "30%",
          border: "1px solid #888",
          boxShadow:
            "0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)",
          width: "80%",

          position: "relative",
        }}
      >
        <div
          style={{
            padding: "2px 16px",
            color: "white",
          }}
        >
          <h2>{title}</h2>
        </div>
        <div
          style={{
            padding: "2px 16px",
          }}
        >
          {content}
        </div>
        <div
          style={{
            padding: "2px 16px",
            position: "absolute",
            bottom: "20px",
            right: "20px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {actions}
        </div>
      </div>
    </div>,
    document.querySelector("#modal"),
  );
};

export default Modal;
