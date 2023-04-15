import { Box, Column, Grid, Heading } from "@twilio-paste/core";

export const Header = () => (
  <Grid>
    <Column span={6}>
      <Box paddingBottom={"space60"}>
        <Heading as={"h1"} variant={"heading20"}>
          Ducky Merch
        </Heading>
      </Box>
    </Column>
  </Grid>
);
