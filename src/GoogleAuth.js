import React, { useEffect, useState, useRef } from "react";
import { Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";

const GoogleAuth = () => {
  const auth = useRef(null);
  const [isSignedIn, setSignedIn] = useState(null);

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_GOOGLE_API_KEY,
          scope: "email",
        })
        .then(() => {
          auth.current = window.gapi.auth2.getAuthInstance();
          setSignedIn(auth.current.isSignedIn.get());
          auth.current.isSignedIn.listen(onAuthChange);
        });
    });
  }, [isSignedIn]);

  const onAuthChange = () => {
    setSignedIn(auth.current.isSignedIn.get());
  };

  const signIn = () => {
    auth.current.signIn();
  };

  const signOut = () => {
    auth.current.signOut();
  };

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <Button icon={<GoogleOutlined />} onClick={signOut}>
          Sign Out
        </Button>
      );
    } else {
      return (
        <Button icon={<GoogleOutlined />} onClick={signIn}>
          Sign In with Google
        </Button>
      );
    }
  };

  return <div>{renderAuthButton()}</div>;
};

export default GoogleAuth;
