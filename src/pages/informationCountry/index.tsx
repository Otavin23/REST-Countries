import { Header } from "../../components/header";
import {
  Box,
  Container,
  Button,
  Heading,
  Image,
  UnorderedList,
  ListItem,
  Text,
  Flex,
} from "@chakra-ui/react";

const InformationCountry = () => {
  return (
    <>
      <Header />

      <Box as="main">
        <Container maxW="1400px" w="95%">
          <Button
            my="4.5rem"
            bg="#fff"
            boxShadow="0px 4px 10px #DFDFDF"
            pr="3rem"
            pl="1.5rem"
            py="1.4rem"
            border="1px solid #DFDFDF"
          >
            <Image
              src="../assets/home/arrowRight.png"
              alt=""
              w="30px"
              mr="1rem"
            />
            Back
          </Button>

          <Flex as="section" justify="space-between" align="center">
            <Box>
              <Image
                src="https://flagcdn.com/be.svg"
                alt=""
                w="1250px"
                h="400px"
              />
            </Box>

            <Box w="100%" ml="8rem">
              <Heading as="h1" fontWeight="800" fontSize="30px">
                Belgium
              </Heading>

              <Flex my="1.5rem" justify="space-between">
                <UnorderedList listStyleType="none" m="0">
                  <ListItem mt="0.5rem" color="#434343">
                    <Text as="span" fontWeight="600" mr="0.3rem" color="#000">
                      Native Name:
                    </Text>
                    Belgie
                  </ListItem>
                  <ListItem mt="0.5rem" color="#434343">
                    <Text as="span" fontWeight="600" mr="0.3rem" color="#000">
                      Population:
                    </Text>
                    Belgie
                  </ListItem>
                  <ListItem mt="0.5rem" color="#434343">
                    <Text as="span" fontWeight="600" mr="0.3rem" color="#000">
                      Region:
                    </Text>
                    Belgie
                  </ListItem>
                  <ListItem mt="0.5rem" color="#434343">
                    <Text as="span" fontWeight="600" mr="0.3rem" color="#000">
                      Sub Region:
                    </Text>
                    Belgie
                  </ListItem>
                  <ListItem mt="0.5rem" color="#434343">
                    <Text as="span" fontWeight="600" mr="0.3rem" color="#000">
                      Capital:
                    </Text>
                    Belgie
                  </ListItem>
                </UnorderedList>

                <UnorderedList listStyleType="none" m="0">
                  <ListItem mt="0.5rem" color="#434343">
                    <Text as="span" fontWeight="600" mr="0.3rem" color="#000">
                      Top Level Domain:
                    </Text>
                    Belgie
                  </ListItem>
                  <ListItem mt="0.5rem" color="#434343">
                    <Text as="span" fontWeight="600" mr="0.3rem" color="#000">
                      Currencies:
                    </Text>
                    Belgie
                  </ListItem>
                  <ListItem mt="0.5rem" color="#434343">
                    <Text as="span" fontWeight="600" mr="0.3rem" color="#000">
                      Languages:
                    </Text>
                    Belgie
                  </ListItem>
                </UnorderedList>
              </Flex>

              <Flex align="center" mt="3rem">
                <Text as="span" fontWeight="600" color="#000">
                  Border Countries:
                </Text>

                <UnorderedList display="flex" listStyleType="none">
                  <ListItem
                    mr="0.5rem"
                    px="1rem"
                    py="0.4rem"
                    bg="#fff"
                    boxShadow="0px 4px 10px #EFEFEF"
                    borderRadius="0.3rem"
                    border="1px solid #EFEFEF"
                  >
                    France
                  </ListItem>
                  <ListItem
                    mr="0.5rem"
                    px="1rem"
                    py="0.4rem"
                    bg="#fff"
                    boxShadow="0px 4px 10px #EFEFEF"
                    borderRadius="0.3rem"
                    border="1px solid #EFEFEF"
                  >
                    Germany
                  </ListItem>
                  <ListItem
                    mr="0.5rem"
                    px="1rem"
                    py="0.4rem"
                    bg="#fff"
                    boxShadow="0px 4px 10px #EFEFEF"
                    borderRadius="0.3rem"
                    border="1px solid #EFEFEF"
                  >
                    Netherlands
                  </ListItem>
                </UnorderedList>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export { InformationCountry };
