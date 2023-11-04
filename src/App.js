import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/pages/Root";
import ErrorPage from "./ErrorPage";
import Theme from "./context/darkModeContext";
import { useState } from "react";
import Home from "./routes/root/Home";
import DashboardHome from "./routes/dashboard/Home";
import Auth from "./routes/pages/Auth";
import Contact from "./routes/root/Contact";
import Pricing from "./routes/root/Pricing";
import { Blogs } from "./routes/root/Blogs";
import { blogState } from "./assets/BlogsState";
import BlogsContext from "./context/blogsContext";
import Blog from "./routes/root/Blog";
import UserContext from "./context/userContext";
import { auth } from "./firebase/firebase";
import FormData from "./routes/pages/FormData";
import Questions from "./routes/Auth/Questions";
import Form from "./routes/Auth/Form";
import Dashboard from "./routes/pages/Dashboard";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [blogs, setBlogs] = useState(blogState);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "", element: <Home /> },
        { path: "contact", element: <Contact /> },
        { path: "pricing", element: <Pricing /> },
        {
          path: "blogs",
          element: <Blogs />,
        },
        {
          path: "blogs/:id",
          element: <Blog />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "home",
          element: <DashboardHome />,
        },
      ],
    },
    { path: "/login", element: <Auth />, errorElement: <ErrorPage /> },
    {
      path: "/signup",
      element: <Auth signup />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/signup/details",
      element: <FormData />,

      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <Form />,
          errorElement: <ErrorPage />,
        },
        {
          path: "questions",
          element: <Questions />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <UserContext.Provider value={auth}>
        <BlogsContext.Provider value={{ blogs, setBlogs }}>
          <Theme.Provider value={{ darkMode, setDarkMode }}>
            <RouterProvider router={router} />
          </Theme.Provider>
        </BlogsContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
