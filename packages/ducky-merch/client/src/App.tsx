import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  loader as productLoader,
  ProductView,
} from "./views/products/product/product-view";
import { Products, loader as productsLoader } from "./views/products/products";
import { ToastContainer, Toaster, useToaster } from "@twilio-paste/core";
import { Theme } from "@twilio-paste/core/theme";

export const App = () => {
  const toaster = useToaster();
  const router = createBrowserRouter([
    {
      path: "/products",
      loader: productsLoader,
      element: <Products />,
    },
    {
      path: "/products/:id",
      loader: productLoader,
      element: <ProductView />,
    },
  ]);

  return (
    <Theme.Provider theme="dark">
      <RouterProvider router={router} />
      <ToastContainer>
        <Toaster {...toaster} />
      </ToastContainer>
    </Theme.Provider>
  );
};

export default App;
