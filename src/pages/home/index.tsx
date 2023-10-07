import { Header } from "../../components/header";
import { useState } from "react";
import { Flex, Container } from "@chakra-ui/react";
import { FilterCountries } from "../../components/filterCountries";
import { FilterSelect } from "../../components/filterSelect";

const Home = () => {
  const [filterRegion, setFilterRegion] = useState(false);
  const [filterOptions, setFilterOptions] = useState("all");
  const [countryInput, setCountryInput] = useState("");

  console.log(countryInput);
  return (
    <>
      <Header />

      <Flex as="main" justify="center">
        <Container maxW="1400px" w="95%">
          <FilterSelect
            setFilterRegion={setFilterRegion}
            filterRegion={filterRegion}
            setFilterOptions={setFilterOptions}
            setCountryInput={setCountryInput}
          />
          <FilterCountries filterOptions={filterOptions} />
        </Container>
      </Flex>
    </>
  );
};

export { Home };
