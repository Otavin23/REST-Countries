import { Box } from "@chakra-ui/react";
import useSWR from "swr";
import axios from "axios";
import { SkeletonLoading } from "../loadingSkeleton";
import { CardCountry } from "../cardCountry";

const FilterCountries = () => {
  const { data, isLoading } = useSWR(
    "https://restcountries.com/v2/all",
    async (url) => {
      const { data } = await axios.get(url);
      return data;
    }
  );

  console.log(!isLoading && data.length);

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
          {data.map((country: any, index: number) => (
            <CardCountry
              key={index}
              image={country.flags.svg}
              name={country.name}
            />
          ))}
        </>
      )}
    </Box>
  );
};
export { FilterCountries };
