import React from "react";
import {
  Box,
  Button,
  UnorderedList,
  ListItem,
  Image,
  Flex,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

interface IFilterSelect {
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  inputRef: any;
  options: React.Dispatch<React.SetStateAction<string>>;
}

const FilterSelect = ({ inputRef, setSearchInput, options }: IFilterSelect) => {
  const bgContent = useColorModeValue("#fff", "#2B3743");
  const shadow = useColorModeValue("#E8E8E8", "#1F2C35");

  const [modalOptions, setModalOptions] = useState(false);

  let timeout: number;

  const searchInputDelay = () => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      setSearchInput(inputRef?.current?.value);
    }, 500);
  };

  return (
    <Flex
      as="section"
      justify="space-between"
      my="3.5rem"
      direction={{ base: "column", lg: "row", md: "row", sm: "column" }}
    >
      <Flex
        align="center"
        bg={bgContent}
        h="55px"
        w={{ base: "100%", lg: "35%", md: "35%", sm: "100%" }}
        boxShadow={`0px 4px 10px ${shadow}`}
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
          ref={inputRef}
          onChange={searchInputDelay}
        />
      </Flex>

      <Box
        pos="relative"
        mt={{ base: "3rem", lg: "0", md: "0", sm: "3rem" }}
        h={{ base: "50px", lg: "auto", md: "auto", sm: "50px" }}
      >
        <Button
          bg={bgContent}
          alignItems="center"
          boxShadow={`0px 4px 10px ${shadow}`}
          h="100%"
          borderRadius="0.3rem"
          pl="1.5rem"
          px="1rem"
          fontWeight="600"
          cursor="pointer"
          onClick={() => setModalOptions(!modalOptions)}
        >
          Filter by Region
          <Image src="../assets/home/arrow.png" alt="" w="20px" ml="2.5rem" />
        </Button>
        {modalOptions && (
          <UnorderedList
            m="0.5rem 0"
            w="100%"
            listStyleType="none"
            bg={bgContent}
            pos="absolute"
            p="1rem"
            borderRadius="0.5rem"
            boxShadow={`0px 4px 10px ${shadow}`}
            zIndex="2"
          >
            <ListItem
              m="0.3rem 0"
              fontWeight="600"
              fontSize="16px"
              cursor="pointer"
              onClick={() => options("all")}
              transition="all 0.2s"
              _hover={{
                color: "#a53c3c",
              }}
            >
              All
            </ListItem>
            <ListItem
              m="0.3rem 0"
              fontWeight="600"
              fontSize="16px"
              cursor="pointer"
              onClick={() => options("Africa")}
              transition="all 0.2s"
              _hover={{
                color: "#a53c3c",
              }}
            >
              Africa
            </ListItem>
            <ListItem
              m="0.3rem 0"
              fontWeight="600"
              fontSize="16px"
              cursor="pointer"
              onClick={() => options("Americas")}
              transition="all 0.2s"
              _hover={{
                color: "#a53c3c",
              }}
            >
              America
            </ListItem>
            <ListItem
              m="0.3rem 0"
              fontWeight="600"
              fontSize="16px"
              cursor="pointer"
              onClick={() => options("Asia")}
              transition="all 0.2s"
              _hover={{
                color: "#a53c3c",
              }}
            >
              Asia
            </ListItem>
            <ListItem
              m="0.3rem 0"
              fontWeight="600"
              fontSize="16px"
              cursor="pointer"
              onClick={() => options("Europe")}
              transition="all 0.2s"
              _hover={{
                color: "#a53c3c",
              }}
            >
              Europe
            </ListItem>
            <ListItem
              m="0.3rem 0"
              fontWeight="600"
              fontSize="16px"
              cursor="pointer"
              onClick={() => options("Oceania")}
              transition="all 0.2s"
              _hover={{
                color: "#a53c3c",
              }}
            >
              Oceania
            </ListItem>
          </UnorderedList>
        )}
      </Box>
    </Flex>
  );
};

export { FilterSelect };
