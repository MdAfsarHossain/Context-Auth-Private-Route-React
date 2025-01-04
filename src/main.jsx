import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./DashBoard/DashBoard.jsx";
import Home from "./Home/Home.jsx";
import "./index.css";
import Login from "./Login/Login.jsx";
import Logout from "./Logout/Logout.jsx";
import MainLayout from "./MainLayout/MainLayout.jsx";
import Orders from "./Orders/Orders.jsx";
import Profile from "./Profile/Profile.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import Register from "./Register/Register.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/orders",
        element: <PrivateRoute><Orders /></PrivateRoute>,
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile /></PrivateRoute>,
      },
      {
        path: "/dashboard",
        element: <PrivateRoute><DashBoard /></PrivateRoute>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
