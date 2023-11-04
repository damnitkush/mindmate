import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-6">
        <h1 className="text-6xl font-extrabold">Oops!</h1>
        <p className="font-medium text-2xl">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-xl">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
