import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Auth from "./features/user/Auth";
import Protected from "./features/user/Protected";
import { AuthProvider } from "./features/user/AuthContext";
import Profile from "./features/user/Profile";
import Settings from "./features/user/Settings";
import AppLayout from "./pages/AppLayout";
import Blogs from "./pages/Blogs";
import BlogsAujezus from "./pages/BlogsAujezus";
import BlogsCategory from "./pages/BlogsCategory";
import BlogHow from "./pages/BlogHow";
import Blog from "./pages/Blog";
import BlogEdit from "./pages/BlogEdit";
import BlogNew from "./pages/BlogNew";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route index path="/home" element={<HomePage />} />

            <Route element={<AppLayout />}>
              <Route path="blogs">
                <Route index element={<Blogs />} />
                <Route path="aujezus" element={<BlogsAujezus />} />
                <Route path=":category" element={<BlogsCategory />} />
              </Route>

              <Route path="blog">
                <Route index element={<Navigate to="/blogs" />} />
                <Route path=":id" element={<Blog />} />
                <Route
                  path=":id/edit"
                  element={
                    <Protected>
                      <BlogEdit />
                    </Protected>
                  }
                />
                <Route
                  path="new"
                  element={
                    <Protected>
                      <BlogNew />
                    </Protected>
                  }
                />
                <Route path="how" element={<BlogHow />} />
              </Route>

              <Route path="auth" element={<Auth />} />

              <Route path="user">
                <Route path=":id" element={<Profile />} />
                <Route path="settings" element={<Settings />} />
              </Route>
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
