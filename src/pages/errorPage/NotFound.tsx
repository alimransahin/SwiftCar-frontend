import LinkButton from "../../utils/Button";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#f8bf304d] to-primary text-blue-900 text-center">
      <div>
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-2xl mt-4">Oops! Page not found.</h2>
        <p className="my-2">The page you are looking for doesn't exist.</p>
        <LinkButton text=" Go Home" href="/" />
      </div>
    </div>
  );
};

export default NotFound;
