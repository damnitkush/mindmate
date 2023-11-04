import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/pages/Root";
import ErrorPage from "./ErrorPage";
import Theme from "./context/darkModeContext";
import { useState } from "react";
import Home from "./routes/root/Home";
import Auth from "./routes/pages/Auth";
import Contact from "./routes/root/Contact";
import Pricing from "./routes/root/Pricing";
import { Blog } from "./routes/root/Blog";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "", element: <Home /> },
        { path: "contact", element: <Contact /> },
        { path: "pricing", element: <Pricing /> },
        { path: "blogs", element: <Blog /> },
      ],
    },
    { path: "/login", element: <Auth />, errorElement: <ErrorPage /> },
    {
      path: "/signup",
      element: <Auth signup />,
      errorElement: <ErrorPage />,
    },
  ]);
  return (
    <>
      <Theme.Provider value={{ darkMode, setDarkMode }}>
        <RouterProvider router={router} />
      </Theme.Provider>
    </>
  );
}

export default App;
