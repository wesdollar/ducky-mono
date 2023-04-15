import { ToastContainer, Toaster, useToaster } from "@twilio-paste/core";
import { Theme } from "@twilio-paste/core/theme";
import { Products } from "../../views/products/products";

export const PrimaryLayout = () => {
  const toaster = useToaster();

  return (
    <Theme.Provider theme="dark">
      <Products />
      <ToastContainer>
        <Toaster {...toaster} />
      </ToastContainer>
    </Theme.Provider>
  );
};
