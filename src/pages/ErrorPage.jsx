import { useRouteError } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      className="flex flex-col justify-center items-center h-screen font-inter gap-6"
      id="error-page"
    >
      <h1 className=" font-bold fluid-xl">Oops!</h1>
      <p className="  font-medium  ">
        Sorry, an unexpected error has occurred.
      </p>
      <p className=" font-light fluid-base ">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
