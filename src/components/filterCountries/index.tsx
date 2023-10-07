import { Box } from "@chakra-ui/react";

import { CardCountry } from "../cardCountry";

const FilterCountries = ({ data }: any) => {
  return (
    <Box
      as="section"
      display="grid"
      gridTemplateColumns="270px 270px 270px 270px"
      justifyContent="space-between"
    >
      {data.map((country: any, index: number) => (
        <CardCountry
          key={index}
          image={country.flags.svg}
          name={country.name}
          capital={country.capital}
          population={country.population}
          region={country.region}
        />
      ))}
    </Box>
  );
};
export { FilterCountries };
