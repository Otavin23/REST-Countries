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
import useSWR from "swr";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../service/api";
import { SkeletonInformation } from "../../components/loadingSkeleton/information";

const InformationCountry = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useSWR(
    `name/${name}?fullText=true`,
    async (url) => {
      const { data } = await api.get(url);
      return data;
    }
  );

  console.log(data);
  const handleBorder = async (border: string) => {
    const { data } = await api.get(`/alpha/${border}`);
    navigate(`/information/${data.name}`);
  };

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

          {isLoading ? (
            <SkeletonInformation />
          ) : (
            <>
              <Flex as="section" justify="space-between" align="center">
                <Box>
                  <Image src={data[0].flags.svg} alt="" w="1250px" h="400px" />
                </Box>

                <Box w="100%" ml="8rem">
                  <Heading as="h1" fontWeight="800" fontSize="30px">
                    {data[0].name}
                  </Heading>

                  <Flex my="1.5rem" justify="space-between">
                    <UnorderedList listStyleType="none" m="0">
                      <ListItem mt="0.5rem" color="#434343">
                        <Text
                          as="span"
                          fontWeight="600"
                          mr="0.3rem"
                          color="#000"
                        >
                          Native Name:
                        </Text>
                        {data[0].name}
                      </ListItem>
                      <ListItem mt="0.5rem" color="#434343">
                        <Text
                          as="span"
                          fontWeight="600"
                          mr="0.3rem"
                          color="#000"
                        >
                          Population:
                        </Text>
                        {data[0].population}
                      </ListItem>
                      <ListItem mt="0.5rem" color="#434343">
                        <Text
                          as="span"
                          fontWeight="600"
                          mr="0.3rem"
                          color="#000"
                        >
                          Region:
                        </Text>
                        {data[0].region}
                      </ListItem>
                      <ListItem mt="0.5rem" color="#434343">
                        <Text
                          as="span"
                          fontWeight="600"
                          mr="0.3rem"
                          color="#000"
                        >
                          Sub Region:
                        </Text>
                        {data[0].subregion}
                      </ListItem>
                      <ListItem mt="0.5rem" color="#434343">
                        <Text
                          as="span"
                          fontWeight="600"
                          mr="0.3rem"
                          color="#000"
                        >
                          Capital:
                        </Text>
                        {data[0].capital[0]}
                      </ListItem>
                    </UnorderedList>

                    <UnorderedList listStyleType="none" m="0">
                      <ListItem mt="0.5rem" color="#434343">
                        <Text
                          as="span"
                          fontWeight="600"
                          mr="0.3rem"
                          color="#000"
                        >
                          Top Level Domain:
                        </Text>
                        {data[0].topLevelDomain[0]}
                      </ListItem>
                      <ListItem mt="0.5rem" color="#434343">
                        <Text
                          as="span"
                          fontWeight="600"
                          mr="0.3rem"
                          color="#000"
                        >
                          Currencies:
                        </Text>
                        {data[0].currencies[0].code}
                      </ListItem>
                      <ListItem display="flex" mt="0.5rem" color="#434343">
                        <Text
                          as="span"
                          fontWeight="600"
                          mr="0.3rem"
                          color="#000"
                        >
                          Languages:
                        </Text>
                        {data[0].languages.map((language: any) => (
                          <Text mr="0.5rem">{language.name}</Text>
                        ))}
                      </ListItem>
                    </UnorderedList>
                  </Flex>

                  <Flex align="center" mt="3rem">
                    <Text as="span" fontWeight="600" color="#000">
                      Border Countries:
                    </Text>

                    <UnorderedList display="flex" listStyleType="none">
                      {data[0].borders?.map((borders: any) => (
                        <ListItem
                          onClick={() => handleBorder(borders)}
                          mr="0.5rem"
                          px="1rem"
                          py="0.4rem"
                          bg="#fff"
                          boxShadow="0px 4px 10px #EFEFEF"
                          borderRadius="0.3rem"
                          border="1px solid #EFEFEF"
                          cursor="pointer"
                        >
                          {borders}
                        </ListItem>
                      ))}
                    </UnorderedList>
                  </Flex>
                </Box>
              </Flex>
            </>
          )}
        </Container>
      </Box>
    </>
  );
};

export { InformationCountry };
