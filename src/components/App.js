import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Layout } from "antd";

import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Header />
        <Layout.Content>
          <Route path="/" exact component={StreamList} />
          <Route path="/stream/new" exact component={StreamCreate} />
          <Route path="/stream/edit" exact component={StreamEdit} />
          <Route path="/stream/delete" exact component={StreamDelete} />
          <Route path="/stream/show" exact component={StreamShow} />
        </Layout.Content>
      </BrowserRouter>
    </Layout>
  );
};

export default App;
