import LinkButton from "../../utils/Button";

const Unauthorized = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#f8bf304d] to-primary text-blue-900 text-center">
      <div>
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-2xl mt-4">Unauthorized Access</h2>
        <p className="my-2">You have no permission to access this page</p>
        <LinkButton text=" Go Home" href="/" />
      </div>
    </div>
  );
};

export default Unauthorized;
