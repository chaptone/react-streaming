import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" component={() => <div>App</div>} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
