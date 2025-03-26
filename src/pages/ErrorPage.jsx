import { Link, useLocation, useRouteError } from "react-router";

const ErrorPage = () => {
  const err = useRouteError();
  const location = useLocation();


  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl sm:text-6xl md:text-5xl lg:text-9xl font-bold">
        {err.status.toString().charAt(0)}
        <span className="text-green-500 font-greatvibes mx-2">{err.status.toString().charAt(1)}</span>
        {err.status.toString().charAt(2)}
      </h1>
      <h2 className="font-semibold text-2xl">{err.statusText}</h2>
      <p className="text-xl sm:text-xl md:text-2xl lg:text-4xl pt-10">
        <span className="italic text-green-500">Oops!</span> {err.data}
      </p>
      <p className="text-gray-500 mt-1">URL: {location.pathname}</p>
      <Link
        to="/"
        className="mt-4 px-6 py-2 border border-green-500 text-green-500 rounded-full hover:bg-green-500 hover:text-white transition"
      >
        Home
      </Link>
    </div>
  );
};

export default ErrorPage;
