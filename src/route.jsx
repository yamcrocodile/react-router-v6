import Main from "./components/Main";
import Products from "./components/Products";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Login from "./components/Login";

import MainAdmin from "./components/admin/Main_admin";
import Dashboard from "./components/admin/Dashboard";
import Mail from "./components/admin/Mail";
import Customers from "./components/admin/Customers";
import ShowCustomer from "./components/admin/ShowCustomer";
import Logout from "./components/admin/Logout";

import PageFound from "./components/PageFound";

const route = [
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "home", element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> }
    ]
  },
  {
    path: "/admin",
    element: <MainAdmin />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "mail", element: <Mail /> },
      { path: "customers", element: <Customers /> },
      { path: "customers/ShowCustomer/:id", element: <ShowCustomer /> },
      { path: "logout", element: <Logout /> }
    ]
  },
  {
    path: "*",
    element: <PageFound />
  }
];

export default route;
