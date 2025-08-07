import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { fetchUsers } from "./features/users/usersSlice";

//runs this immediately after the app starts
store.dispatch(fetchUsers());

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
