import {
  Image,
  Box,
  Heading,
  UnorderedList,
  ListItem,
  Text,
} from "@chakra-ui/react";

interface IProps {
  image: string;
  name: string;
}

const CardCountry = ({ image, name }: IProps) => {
  return (
    <Box
      bg="#fff"
      boxShadow="0px 4px 10px #EFEFEF"
      borderRadius="0.5rem"
      mb="5rem"
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
        <Heading as="h3" fontSize="18px">
          {name}
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
            dadad
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
            fsfs
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
            fsfsf
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
};

export { CardCountry };
