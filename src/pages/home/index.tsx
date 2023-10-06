import { Header } from "../../components/header";
import {
  Flex,
  Container,
  Input,
  Image,
  Box,
  Heading,
  UnorderedList,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { SkeletonLoading } from "../../components/loadingSkeleton";
import useSWR from "swr";
import axios from "axios";

const Home = () => {
  const { data, isLoading } = useSWR(
    "https://restcountries.com/v3.1/all",
    async (url) => {
      const { data } = await axios.get(url);
      return data;
    }
  );

  return (
    <>
      <Header />
      <Flex as="main" justify="center">
        <Container maxW="1400px" w="95%">
          <Flex justify="space-between" my="3.5rem">
            <Flex
              align="center"
              bg="#fff"
              h="55px"
              w="35%"
              boxShadow="0px 4px 10px #EFEFEF"
              borderRadius="0.3rem"
            >
              <Image
                src="../assets/home/search.png"
                alt=""
                w="20px"
                ml="2rem"
              />
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
            <Box>Filter by Region</Box>
          </Flex>

          <Box
            as="section"
            display="grid"
            gridTemplateColumns="270px 270px 270px 270px"
            justifyContent="space-between"
          >
            {isLoading ? (
              <>
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
              </>
            ) : (
              <>
                {data.map((countries, index) => (
                  <>
                    <Box
                      bg="#fff"
                      boxShadow="0px 4px 10px #EFEFEF"
                      borderRadius="0.5rem"
                      mb="5rem"
                      key={index}
                    >
                      <Box h="180px">
                        <Image
                          src={countries.flags.svg}
                          alt=""
                          borderRadius="0.5rem 0.5rem 0 0"
                          w="100%"
                          h="100%"
                          objectFit="cover"
                        />
                      </Box>
                      <Box p="1.5rem">
                        <Heading as="h3" fontSize="18px">
                          Brazil
                        </Heading>

                        <UnorderedList m="1rem 0 0 0" listStyleType="none">
                          <ListItem
                            mt="0.2rem"
                            color="#5C5C5C"
                            fontWeight="600"
                            fontSize="15px"
                          >
                            <Text
                              as="span"
                              color="#000"
                              fontWeight="600"
                              mr="0.2rem"
                              fontSize="16px"
                            >
                              Population:
                            </Text>
                            {countries.population}
                          </ListItem>

                          <ListItem
                            mt="0.2rem"
                            color="#5C5C5C"
                            fontWeight="600"
                            fontSize="15px"
                          >
                            <Text
                              as="span"
                              color="#000"
                              fontWeight="600"
                              mr="0.2rem"
                              fontSize="16px"
                            >
                              Region:
                            </Text>
                            {countries.region}
                          </ListItem>

                          <ListItem
                            mt="0.2rem"
                            color="#5C5C5C"
                            fontWeight="600"
                            fontSize="15px"
                          >
                            <Text
                              as="span"
                              color="#000"
                              fontWeight="600"
                              mr="0.2rem"
                              fontSize="16px"
                            >
                              Capital:
                            </Text>
                            {countries.capital}
                          </ListItem>
                        </UnorderedList>
                      </Box>
                    </Box>
                  </>
                ))}
              </>
            )}
          </Box>
        </Container>
      </Flex>
    </>
  );
};

export { Home };
