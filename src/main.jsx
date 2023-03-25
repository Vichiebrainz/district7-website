import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import { CustomBrowserRouter } from "./customBroswerRouter";
import ReactGA from "react-ga4";
import reportWebVitals from "./reportWebVitals";

ReactGA.initialize("G-WM5JM0WQGG");

ReactDOM.createRoot(document.getElementById("root")).render(
  <CustomBrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </CustomBrowserRouter>
);

const SendAnalytics = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(SendAnalytics);
