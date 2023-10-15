import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./components/AppLayout";
import Error404 from "./components/ui/Error404";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error404 />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/:country", element: <Details /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
