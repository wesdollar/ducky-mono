import { Box } from "@twilio-paste/core";
import React from "react";

interface CenteredViewportProps {
  children: React.ReactNode;
}

export const CenteredViewport = ({ children }: CenteredViewportProps) => (
  <Box
    display={"flex"}
    width="100%"
    height={"100vh"}
    justifyContent="center"
    alignItems={"center"}
  >
    {children}
  </Box>
);
