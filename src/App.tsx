import "./App.css";
import MainLayout from "./components/layouts/MainLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="min-h-screen w-full">
      <MainLayout />
      <ToastContainer position="top-center" theme="colored" />
    </div>
  );
};

export default App;
