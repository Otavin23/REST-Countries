import {
  Box,
  Button,
  UnorderedList,
  ListItem,
  Image,
  Flex,
  Input,
} from "@chakra-ui/react";

const FilterSelect = ({ setFilterRegion, filterRegion }: any) => {
  console.log(filterRegion);
  return (
    <Flex as="section" justify="space-between" my="3.5rem">
      <Flex
        align="center"
        bg="#fff"
        h="55px"
        w="35%"
        boxShadow="0px 4px 10px #EFEFEF"
        borderRadius="0.3rem"
      >
        <Image src="../assets/home/search.png" alt="" w="20px" ml="2rem" />
        <Input
          type="text"
          placeholder="Search for a country..."
          variant="unstyled"
          px="1.5rem"
          h="100%"
          fontWeight="600"
          _placeholder={{
            color: "#8E8E8E",
          }}
        />
      </Flex>

      <Box pos="relative">
        <Button
          bg="#fff"
          alignItems="center"
          boxShadow="0px 4px 10px #EFEFEF"
          h="100%"
          borderRadius="0.3rem"
          pl="1.5rem"
          px="1rem"
          fontWeight="600"
          cursor="pointer"
          onClick={() => setFilterRegion(!filterRegion)}
        >
          Filter by Region
          <Image src="../assets/home/arrow.png" alt="" w="20px" ml="2.5rem" />
        </Button>
        {filterRegion && (
          <UnorderedList
            m="0.5rem 0"
            w="100%"
            listStyleType="none"
            bg="#fff"
            pos="absolute"
            p="1rem"
            borderRadius="0.5rem"
            boxShadow="10px 0 10px 0 #ececec"
          >
            <ListItem m="0.3rem 0" fontWeight="600" fontSize="16px">
              Africa
            </ListItem>
            <ListItem m="0.3rem 0" fontWeight="600" fontSize="16px">
              America
            </ListItem>
            <ListItem m="0.3rem 0" fontWeight="600" fontSize="16px">
              Asia
            </ListItem>
            <ListItem m="0.3rem 0" fontWeight="600" fontSize="16px">
              Europe
            </ListItem>
            <ListItem m="0.3rem 0" fontWeight="600" fontSize="16px">
              Oceania
            </ListItem>
          </UnorderedList>
        )}
      </Box>
    </Flex>
  );
};

export { FilterSelect };
