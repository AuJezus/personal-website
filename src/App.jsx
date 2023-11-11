import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import Blog from "./features/blog/Blog";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import BlogList from "./features/blog/BlogList";
// import BlogEditable from "./features/blog/BlogEditable";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "blog",
    element: <BlogPage />,
    children: [
      { path: "", element: <BlogList /> },
      { path: ":id", element: <Blog /> },
      // { path: "new", element: <BlogEditable /> },
      // { path: "edit/:id", element: <BlogEditable /> },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
