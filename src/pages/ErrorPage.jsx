import { Link, useRouteError } from "react-router-dom";
function ErrorPage() {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <div className="error-container container">
        <div>
          <h3>
            Error 404 is an error displayed by a browser or server, usually
            indicating that the web page the user is trying to access does not
            exist.
          </h3>
          <Link to="/" className="btn">
            Go To Home
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="error-container container">
      <div>
        <h3>
          Oops! Looks like our web page did a somersault and landed in a digital
          rabbit hole. We're working on untangling the code. Hang tight!
        </h3>
      </div>
    </div>
  );
}

export default ErrorPage;
