import { RouteObject, useRoutes } from "react-router-dom";
import Home from "./pages/home";
import { Projects } from "./pages/projects";

export default function Router() {
  const allRoutes: RouteObject[] = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
  ];
  return useRoutes(allRoutes);
}
