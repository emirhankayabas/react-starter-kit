import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import "./assets/css/index.css";

ReactDOM.createRoot(document.getElementById("layout")).render(
  <RouterProvider router={routes} />
);
