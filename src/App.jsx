import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "blog",
    element: <BlogPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
