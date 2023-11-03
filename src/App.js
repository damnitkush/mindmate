import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/pages/Root";
import ErrorPage from "./ErrorPage";
import Theme from "./context/darkModeContext";
import { useState } from "react";
import Home from "./routes/root/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children:[{path:"",element:<Home/>}]
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
