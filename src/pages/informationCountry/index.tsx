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
  useColorModeValue,
} from "@chakra-ui/react";
import useSWR from "swr";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../service/api";
import { SkeletonInformation } from "../../components/loadingSkeleton/information";

const InformationCountry = () => {
  const bgContent = useColorModeValue("#fff", "#2B3743");
  const subColor = useColorModeValue("#5C5C5C", "#CDD9E5");
  const textPlace = useColorModeValue("#5C5C5C", "#9EAAB6");
  const shadow = useColorModeValue("#E8E8E8", "#1F2C35");

  const { name } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useSWR(
    `name/${name}?fullText=true`,
    async (url) => {
      const { data } = await api.get(url);
      return data;
    }
  );

  const handleBorder = async (border: string) => {
    const { data } = await api.get(`/alpha/${border}`);
    navigate(`/information/${data.name}`);
  };

  return (
    <>
      <Flex as="main" justify="center">
        <Container maxW="1400px" w="95%" p="0" m="0" mb="3rem">
          <Button
            onClick={() => history.back()}
            my="4.5rem"
            bg={bgContent}
            boxShadow={`0px 4px 10px ${shadow}`}
            pr="3rem"
            pl="1.5rem"
            py="1.4rem"
            border={`1px solid ${shadow}`}
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
              <Flex
                as="section"
                justify="space-between"
                direction={{
                  base: "column",
                  lg: "row",
                  md: "column",
                }}
                align="center"
              >
                <Box>
                  <Image
                    src={data[0].flags.svg}
                    alt=""
                    w="1250px"
                    h="400px"
                    objectFit="cover"
                  />
                </Box>

                <Box
                  w="100%"
                  mt={{ base: "3rem", lg: "0", md: "3rem" }}
                  ml={{ base: "0", lg: "8rem", md: "0" }}
                >
                  <Heading as="h1" fontWeight="800" fontSize="30px">
                    {data[0].name}
                  </Heading>

                  <Flex
                    my="1.5rem"
                    justify="space-between"
                    direction={{
                      base: "column",
                      lg: "row",
                      md: "row",
                      sm: "row",
                    }}
                  >
                    <UnorderedList listStyleType="none" m="0">
                      <ListItem mt="0.5rem" color={textPlace}>
                        <Text
                          as="span"
                          fontWeight="600"
                          mr="0.3rem"
                          color={subColor}
                        >
                          Native Name:
                        </Text>
                        {data[0].name}
                      </ListItem>

                      <ListItem mt="0.5rem" color={textPlace}>
                        <Text
                          as="span"
                          fontWeight="600"
                          mr="0.3rem"
                          color={subColor}
                        >
                          Population:
                        </Text>
                        {data[0].population}
                      </ListItem>
                      <ListItem mt="0.5rem" color={textPlace}>
                        <Text
                          as="span"
                          fontWeight="600"
                          mr="0.3rem"
                          color={subColor}
                        >
                          Region:
                        </Text>
                        {data[0].region}
                      </ListItem>
                      <ListItem mt="0.5rem" color={textPlace}>
                        <Text
                          as="span"
                          fontWeight="600"
                          mr="0.3rem"
                          color={subColor}
                        >
                          Sub Region:
                        </Text>
                        {data[0].subregion}
                      </ListItem>
                      <ListItem mt="0.5rem" color={textPlace}>
                        <Text
                          as="span"
                          fontWeight="600"
                          mr="0.3rem"
                          color={subColor}
                        >
                          Capital:
                        </Text>
                        {data[0].capital[0]}
                      </ListItem>
                    </UnorderedList>

                    <UnorderedList
                      listStyleType="none"
                      m={{
                        base: "3rem 0 0 0",
                        lg: "0 0 0 0",
                        md: "0 0 0 0",
                        sm: "0 0 0 0",
                      }}
                    >
                      <ListItem mt="0.5rem" color={textPlace}>
                        <Text
                          as="span"
                          fontWeight="600"
                          mr="0.3rem"
                          color={subColor}
                        >
                          Top Level Domain:
                        </Text>
                        {data[0].topLevelDomain[0]}
                      </ListItem>
                      <ListItem mt="0.5rem" color={textPlace}>
                        <Text
                          as="span"
                          fontWeight="600"
                          mr="0.3rem"
                          color={subColor}
                        >
                          Currencies:
                        </Text>
                        {data[0].currencies[0].code}
                      </ListItem>
                      <ListItem display="flex" mt="0.5rem" color={textPlace}>
                        <Text
                          as="span"
                          fontWeight="600"
                          mr="0.3rem"
                          color={subColor}
                        >
                          Languages:
                        </Text>
                        {data[0].languages.map((language: any) => (
                          <Text mr="0.5rem">{language.name}</Text>
                        ))}
                      </ListItem>
                    </UnorderedList>
                  </Flex>

                  <Flex
                    align={{
                      base: "start",
                      lg: "center",
                      md: "start",
                    }}
                    mt="3rem"
                    direction={{
                      base: "column",
                      lg: "row",
                      md: "column",
                    }}
                  >
                    <Text as="span" fontWeight="600" color={subColor} mr="1rem">
                      Border Countries:
                    </Text>

                    <UnorderedList
                      display="flex"
                      listStyleType="none"
                      flexWrap="wrap"
                      m={{
                        base: "1rem 0 0 0",
                        lg: "0 0 0 0",
                        md: "1rem 0 0 0",
                      }}
                    >
                      {data[0].borders?.map((borders: any) => (
                        <ListItem
                          onClick={() => handleBorder(borders)}
                          mr="0.5rem"
                          px="1rem"
                          py="0.4rem"
                          bg={bgContent}
                          boxShadow={`0px 4px 10px ${shadow}`}
                          borderRadius="0.3rem"
                          border={`1px solid ${shadow}`}
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
      </Flex>
    </>
  );
};

export { InformationCountry };
