import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";
import CryptoContext from "./CryptoContext";
import "react-alice-carousel/lib/alice-carousel.css";

ReactDOM.render(
  <React.StrictMode>
  <CryptoContext>
  <TransactionsProvider>
    <App />
  </TransactionsProvider>
  </CryptoContext>
  </React.StrictMode>,
  document.getElementById("root"),
);
