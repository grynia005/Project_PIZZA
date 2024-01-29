import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/PizzaStore.js";
import { BrowserRouter } from "react-router-dom";
import { LogoHeadCont } from "./context/LogoHeadContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <LogoHeadCont>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LogoHeadCont>
    </Provider>
  </React.StrictMode>
);
