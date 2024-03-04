import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Login from "../pages/Login";
import { routeGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         {
            path: "about",
            element: <About />,
         },
      ],
   },
   {
      path: "/admin",
      element: <App />,
      children: routeGenerator(adminPaths),
   },
   {
      path: "/login",
      element: <Login />,
   },
]);

export default router;
