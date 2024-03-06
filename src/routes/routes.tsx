import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Login from "../pages/Login";
import { routeGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";

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
      path: "/faculty",
      element: <App />,
      children: routeGenerator(facultyPaths),
   },
   {
      path: "/student",
      element: <App />,
      children: routeGenerator(studentPaths),
   },
   {
      path: "/login",
      element: <Login />,
   },
]);

export default router;
