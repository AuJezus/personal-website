import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import Blog from "./features/blog/Blog";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import BlogList from "./features/blog/BlogList";
import BlogEditable from "./features/blog/BlogEditable";
import Auth from "./features/user/Auth";
import Protected from "./features/user/Protected";
import { AuthProvider } from "./features/user/AuthContext";
import Profile from "./features/user/Profile";
import Settings from "./features/user/Settings";

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
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="blog" element={<BlogPage />}>
              <Route path="" element={<BlogList />} />
              <Route path="auth" element={<Auth />} />
              <Route path="user/:id" element={<Profile />} />
              <Route
                path="user/:id/settings"
                element={
                  <Protected>
                    <Settings />
                  </Protected>
                }
              />
              <Route
                path="new"
                element={
                  <Protected>
                    <BlogEditable />
                  </Protected>
                }
              />
              <Route
                path="edit/:id"
                element={
                  <Protected>
                    <BlogEditable />
                  </Protected>
                }
              />
              <Route path=":id" element={<Blog />} />
            </Route>
            <Route path="error" element={<ErrorPage />} />
            <Route path="*" element={<p>Not found</p>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
