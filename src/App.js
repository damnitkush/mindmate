import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/pages/Root";
import ErrorPage from "./ErrorPage";
import Theme from "./context/darkModeContext";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
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
