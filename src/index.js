import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import {
  SharedThemeProvider,
  SharedCssBaseline,
} from "cx-portal-shared-components";
import UserService from "./components/services/UserService";
import { getHostname } from "./components/services/EnvironmentService";

const hostname = getHostname();
if (hostname === "country-risk-dashboard.dev.demo.catena-x.net")
  import ('./index-dev.scss');
if (hostname === "country-risk-dashboard.int.demo.catena-x.net")
  import ('./index-int.scss');
else {
  import ('./index-dev.scss');
}

const root = ReactDOM.createRoot(document.getElementById("root"));
UserService.init((user) => {
  console.log(user);
  console.log("process", process.env);
  root.render(
    <React.StrictMode>
      <SharedCssBaseline />
      <SharedThemeProvider>
        <App />
      </SharedThemeProvider>
    </React.StrictMode>
  );
});
