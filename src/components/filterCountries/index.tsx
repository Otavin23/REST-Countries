import { Box } from "@chakra-ui/react";
import useSWR from "swr";
import axios from "axios";
import { SkeletonLoading } from "../loadingSkeleton/card";
import { CardCountry } from "../cardCountry";

const FilterCountries = ({ filterOptions }: any) => {
  const { data, isLoading } = useSWR(
    "https://restcountries.com/v2/all",
    async (url) => {
      const { data } = await axios.get(url);
      return data;
    }
  );

  const dataFilter =
    !isLoading &&
    data.filter((countries: any) => {
      if (filterOptions === "all") return countries;

      return countries.region.toLowerCase() === filterOptions;
    });

  return (
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
          {dataFilter.map((country: any, index: number) => (
            <CardCountry
              key={index}
              image={country.flags.svg}
              name={country.name}
              capital={country.capital}
              population={country.population}
              region={country.region}
            />
          ))}
        </>
      )}
    </Box>
  );
};
export { FilterCountries };
