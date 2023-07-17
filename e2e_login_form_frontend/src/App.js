import "./App.css";
import LoginPage from "./components/LoginPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FormPage from "./components/FormPage";
import Head from "./components/Head";
import FormDataTable from "./components/FormDataTable";

// creating routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/form",
    element: <Head />,
    children: [
      {
        path: "",
        element: <FormPage />,
      },
      {
        path: "table",
        element: <FormDataTable />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="relative">
      {/* all the router will be shown here accordingly */}
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
