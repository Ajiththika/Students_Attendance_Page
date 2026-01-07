import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">404</h1>
        <p>Page not found</p>

        <Link
          to="/" className="text-indigo-600 underline" 
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;