import React, { useEffect, useRef } from "react";
import { Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { connect } from "react-redux";

import { signIn, signOut } from "../actions";

const GoogleAuth = ({ isSignedIn, signIn, signOut }) => {
  const auth = useRef(null);

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_GOOGLE_API_KEY,
          scope: "email",
        })
        .then(() => {
          auth.current = window.gapi.auth2.getAuthInstance();
          onAuthChange(auth.current.isSignedIn.get());
          auth.current.isSignedIn.listen(onAuthChange);
        });
    });
  }, [isSignedIn]);

  const onAuthChange = isSignedIn => {
    if (isSignedIn) {
      signIn(auth.current.currentUser.get().getId());
    } else {
      signOut();
    }
  };

  const signInClick = () => {
    auth.current.signIn();
  };

  const signOutClick = () => {
    auth.current.signOut();
  };

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <Button icon={<GoogleOutlined />} onClick={signOutClick}>
          Sign Out
        </Button>
      );
    } else {
      return (
        <Button icon={<GoogleOutlined />} onClick={signInClick}>
          Sign In with Google
        </Button>
      );
    }
  };

  return <div>{renderAuthButton()}</div>;
};

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
