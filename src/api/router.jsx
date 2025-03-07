import LandingMain from "../pages/landing/LandingMain.jsx";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingMain />,
    // errorElement: <NotFound />,
  },
]);
