import { Box } from "@chakra-ui/react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoading = () => {
  return (
    <Box borderRadius="0.5rem" mb="5rem">
      <Skeleton height="180px" />

      <Box p="1.5rem">
        <Skeleton />

        <Skeleton count={3} />
      </Box>
    </Box>
  );
};

export { SkeletonLoading };
