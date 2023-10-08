import {
  Image,
  Box,
  Heading,
  UnorderedList,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface IProps {
  image: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

const CardCountry = ({ image, name, population, region, capital }: IProps) => {
  const bgContent = useColorModeValue("#fff", "#2B3743");
  const color = useColorModeValue("#000", "#fff");
  const subColor = useColorModeValue("#5C5C5C", "#CDD9E5");
  const textPlace = useColorModeValue("#5C5C5C", "#9EAAB6");

  const shadow = useColorModeValue("#E8E8E8", "#1F2C35");

  return (
    <Link to={`information/${name}`}>
      <Box
        bg={bgContent}
        boxShadow={`0px 4px 10px ${shadow}`}
        borderRadius="0.5rem"
        mb="5rem"
        h="360px"
      >
        <Box h="180px">
          <Image
            src={image}
            alt=""
            borderRadius="0.5rem 0.5rem 0 0"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>

        <Box p="1.5rem">
          <Heading as="h3" fontSize="18px" color={color}>
            {name}
          </Heading>

          <UnorderedList m="1rem 0 0 0" listStyleType="none">
            <ListItem
              mt="0.2rem"
              color={textPlace}
              fontWeight="600"
              fontSize="15px"
            >
              <Text
                as="span"
                color={subColor}
                fontWeight="600"
                mr="0.2rem"
                fontSize="16px"
              >
                Population:
              </Text>
              {population}
            </ListItem>

            <ListItem
              mt="0.2rem"
              color={textPlace}
              fontWeight="600"
              fontSize="15px"
            >
              <Text
                as="span"
                color={subColor}
                fontWeight="600"
                mr="0.2rem"
                fontSize="16px"
              >
                Region:
              </Text>
              {region}
            </ListItem>

            <ListItem
              mt="0.2rem"
              color={textPlace}
              fontWeight="600"
              fontSize="15px"
            >
              <Text
                as="span"
                color={subColor}
                fontWeight="600"
                mr="0.2rem"
                fontSize="16px"
              >
                Capital:
              </Text>
              {capital}
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Link>
  );
};

export { CardCountry };
