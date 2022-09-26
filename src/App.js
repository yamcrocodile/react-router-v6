import { BrowserRouter, useRoutes } from "react-router-dom";

import route from "./route";

import axios from "axios";
axios.defaults.baseURL = "https://reqres.in";

export default function App() {
  const Router = () => {
    let element = useRoutes(route);
    return element;
  };

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
