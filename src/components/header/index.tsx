import { Container, Flex, Text, Image } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      as="header"
      justify="center"
      bg="#fff"
      boxShadow="0px 4px 10px #EFEFEF"
    >
      <Container
        maxW="1400px"
        w="95%"
        py="1.3rem"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text as="span" fontSize="25px" fontWeight="800">
          Where in the world?
        </Text>

        <Flex align="center">
          <Image src="../assets/header/moon.png" alt="" w="25px" />
          <input type="checkbox" />
          <label>Dark Mode</label>
        </Flex>
      </Container>
    </Flex>
  );
};

export { Header };
