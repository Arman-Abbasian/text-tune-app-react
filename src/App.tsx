//hooks
import { Suspense, useEffect } from "react";
//libraries
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
//store
import { checkAuthFromStorage } from "@/features/authSlice";
//components
import BeatLoaderFetch from "@/ui/BeatLoaderFetch";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthFromStorage());
  }, []);

  return (
    <div className="!p-4 h-screen overflow-auto bg-[radial-gradient(circle,_#fff,_#fff)] text-secondary-900">
      <Suspense
        fallback={
          <div className="h-screen flex justify-center items-center">
            <BeatLoaderFetch />
          </div>
        }
      >
        <Outlet />
      </Suspense>
      <ToastContainer />
    </div>
  );
}

export default App;
