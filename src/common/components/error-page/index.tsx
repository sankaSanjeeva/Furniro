import { useRouteError, ErrorResponse, Link } from 'react-router-dom';

export default function ErrorPage() {
  const { data } = useRouteError() as ErrorResponse;

  return (
    <div className="h-svh flex flex-col gap-5 justify-center items-center">
      <h1 className="text-3xl font-medium">Oops!</h1>
      <p className="text-lg">Sorry, an unexpected error has occurred.</p>
      <p className="text-slate-500">
        <i>{data}</i>
      </p>
      <Link to="/">Go to Home</Link>
    </div>
  );
}
