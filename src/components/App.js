import React from "react";
import { Router, Route } from "react-router-dom";
import { Layout } from "antd";

import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <Layout>
      <Router history={history}>
        <Header />
        <Layout.Content style={{ padding: "50px" }}>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </Layout.Content>
      </Router>
    </Layout>
  );
};

export default App;
