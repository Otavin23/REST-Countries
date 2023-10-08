import {
  Container,
  Flex,
  Text,
  Image,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import "../../styles/theme.css";

const Header = () => {
  const { toggleColorMode } = useColorMode();

  const themeLocal = localStorage.getItem("chakra-ui-color-mode");

  const bgContent = useColorModeValue("#fff", "#2B3743");
  const shadow = useColorModeValue("#E8E8E8", "#1E2B34");

  return (
    <Flex
      as="header"
      justify="center"
      bg={bgContent}
      boxShadow={`0px 4px 10px ${shadow}`}
    >
      <Container
        maxW="1400px"
        w="95%"
        py="1.3rem"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ base: "column", lg: "row", md: "row", sm: "row" }}
      >
        <Text
          as="span"
          fontSize="25px"
          fontWeight="800"
          mb={{ base: "1rem", lg: "0", md: "0", sm: "1rem" }}
        >
          Where in the world?
        </Text>

        <Flex as="label" align="center" className="label__checkTheme">
          <Image src="../assets/header/sol.png" alt="" w="30px" mr="0.5rem" />
          <input type="checkbox" className="input__checkbox" />
          <span
            className={
              themeLocal === "light"
                ? "check " + "check__before"
                : "check " + "check__after"
            }
            onClick={toggleColorMode}
          ></span>
          <Image src="../assets/header/moon.png" alt="" w="30px" ml="0.5rem" />
        </Flex>
      </Container>
    </Flex>
  );
};

export { Header };
