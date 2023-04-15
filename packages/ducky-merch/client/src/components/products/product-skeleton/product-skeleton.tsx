import {
  Box,
  Card,
  Heading,
  Paragraph,
  SkeletonLoader,
  Stack,
} from "@twilio-paste/core";
import { Spacer } from "../../utilities/spacer/spacer";

export const ProductSkeleton = () => {
  return (
    <Stack orientation={"vertical"} spacing={"space60"}>
      <Card style={{ cursor: "pointer" }}>
        <Box marginBottom={"space80"}>
          <Heading as={"h3"} variant={"heading30"}>
            <SkeletonLoader height="22px" />
          </Heading>
        </Box>
        <Box marginBottom={"space80"}>
          <SkeletonLoader height="200px" />
        </Box>
        <Box marginBottom={"space80"}>
          <Paragraph>
            <Stack orientation="vertical" spacing="space20">
              <SkeletonLoader />
              <SkeletonLoader />
              <SkeletonLoader />
              <SkeletonLoader />
              <SkeletonLoader width="80px" />
            </Stack>
          </Paragraph>
        </Box>
        <Spacer height={["30px", "30px", "30px"]} />
        <Box marginBottom={"space80"}>
          <SkeletonLoader width="98px" height="36px" />
        </Box>
      </Card>
    </Stack>
  );
};
