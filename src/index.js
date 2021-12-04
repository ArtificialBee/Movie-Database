import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";

const queryClient = new QueryClient();

axios.interceptors.request.use(
  (req) => {
    console.log("REQ -> ", req);
    return req;
  },
  (err) => {
    console.log(err);
    return Promise.reject("Error -> ", err);
  }
);

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
