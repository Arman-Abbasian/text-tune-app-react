import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//css
import "./index.css";
//libraries
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//store
import { makeStore } from "@/store.ts";
//routes
import { routes } from "@/routes.tsx";

const store = makeStore();

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
