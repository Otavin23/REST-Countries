import { Stack, Skeleton, Box } from "@chakra-ui/react";

const SkeletonLoading = () => {
  return (
    <Stack bg="#fff" h="346.31px" borderRadius="0.5rem" mb="5rem">
      <Skeleton height="180px" />
      <Box p="1.5rem">
        <Skeleton height="15px" w="150px" mb="1rem" />
        <Skeleton height="10px" w="130px" />
        <Skeleton height="10px" w="130px" my="0.5rem" />
        <Skeleton height="10px" w="130px" />
      </Box>
    </Stack>
  );
};

export { SkeletonLoading };
