import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import { CustomBrowserRouter } from "./customBroswerRouter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CustomBrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </CustomBrowserRouter>
);
