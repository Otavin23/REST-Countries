import { Box, UnorderedList, ListItem, Flex, Skeleton } from "@chakra-ui/react";
const SkeletonInformation = () => {
  return (
    <Flex as="section" justify="space-between" align="center">
      <Skeleton w="1250px" h="400px" />

      <Box w="100%" ml="8rem">
        <Skeleton w="120px" h="30px" />

        <Flex my="1.5rem" justify="space-between">
          <UnorderedList listStyleType="none" m="0">
            <ListItem mt="0.5rem">
              <Skeleton w="150px" h="15px" />
            </ListItem>

            <ListItem mt="0.5rem">
              <Skeleton w="150px" h="15px" />
            </ListItem>

            <ListItem mt="0.5rem">
              <Skeleton w="150px" h="15px" />
            </ListItem>

            <ListItem mt="0.5rem">
              <Skeleton w="150px" h="15px" />
            </ListItem>

            <ListItem mt="0.5rem">
              <Skeleton w="150px" h="15px" />
            </ListItem>
          </UnorderedList>

          <UnorderedList listStyleType="none" m="0">
            <ListItem mt="0.5rem">
              <Skeleton w="150px" h="15px" />
            </ListItem>

            <ListItem mt="0.5rem">
              <Skeleton w="150px" h="15px" />
            </ListItem>

            <ListItem mt="0.5rem">
              <Skeleton w="150px" h="15px" />
            </ListItem>
          </UnorderedList>
        </Flex>

        <Flex align="center" mt="3rem">
          <Skeleton w="120px" h="20px" />

          <UnorderedList
            display="flex"
            alignItems="center"
            listStyleType="none"
          >
            <ListItem mr="0.5rem">
              <Skeleton w="120px" h="35px" />
            </ListItem>

            <ListItem mr="0.5rem">
              <Skeleton w="120px" h="35px" />
            </ListItem>

            <ListItem mr="0.5rem">
              <Skeleton w="120px" h="35px" />
            </ListItem>
          </UnorderedList>
        </Flex>
      </Box>
    </Flex>
  );
};

export { SkeletonInformation };
