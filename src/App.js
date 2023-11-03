import "./App.css";
<<<<<<< HEAD
=======
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/pages/Root";
import ErrorPage from "./ErrorPage";

>>>>>>> 917e024aa58138db3336fdce475ed07d20b0ee5d
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
