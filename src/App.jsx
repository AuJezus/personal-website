import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import Blog from "./features/blog/Blog";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import BlogList from "./features/blog/BlogList";
import BlogEditable from "./features/blog/BlogEditable";
import Auth from "./features/auth/Auth";
import { useAuth } from "./services/auth";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "blog",
//     element: <BlogPage />,
//     children: [
//       { path: "", element: <BlogList /> },
//       { path: "auth", element: <Auth /> },
//       { path: "new", element: <BlogEditable /> },
//       { path: "edit/:id", element: <BlogEditable /> },
//       { path: ":id", element: <Blog /> },
//     ],
//   },
// ]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  const user = useAuth();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="blog" element={<BlogPage />}>
            <Route path="" element={<BlogList />} />
            <Route path="auth" element={<Auth />} />
            <Route path="new" element={<BlogEditable />} />
            <Route path="edit/:id" element={<BlogEditable />} />
            <Route path=":id" element={<Blog />} />
          </Route>
          <Route path="error" element={<ErrorPage />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
