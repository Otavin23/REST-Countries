import { useState, useRef } from "react";
import { Flex, Container } from "@chakra-ui/react";
import { FilterCountries } from "../../components/filterCountries";
import { FilterSelect } from "../../components/filterSelect";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [options, setOptions] = useState("all");

  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <Flex as="main" justify="center">
        <Container maxW="1400px" w="95%">
          <FilterSelect
            inputRef={inputRef}
            setSearchInput={setSearchInput}
            options={setOptions}
          />

          <FilterCountries filterOptions={options} countryTitle={searchInput} />
        </Container>
      </Flex>
    </>
  );
};

export { Home };
