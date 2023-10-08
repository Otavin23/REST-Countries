import { Box } from "@chakra-ui/react";
import useSWR from "swr";

import { CardCountry } from "../cardCountry";
import { api } from "../../service/api";
import { ICardCountry } from "../../@types/card";
import { SkeletonLoading } from "../loadingSkeleton/card";

interface IProps {
  filterOptions: string;
  countryTitle: string;
}

const FilterCountries = ({ filterOptions, countryTitle }: IProps) => {
  const { data, isLoading } = useSWR("/all", async (url) => {
    const { data } = await api.get(url);

    return data;
  });

  const SkeletonLoad = new Array(8).fill(0);

  const filterCountry =
    !isLoading &&
    data.filter((country: ICardCountry) => {
      if (
        filterOptions === "all" &&
        country.name.toLowerCase().includes(countryTitle.toLowerCase())
      )
        return country;

      return (
        country.name.toLowerCase().includes(countryTitle.toLowerCase()) &&
        country.region === filterOptions
      );
    });

  return (
    <Box
      as="section"
      display="grid"
      justifyContent="space-between"
      gridTemplateColumns={{
        base: "100%",
        lg: "21% 21% 21% 21%",
        md: "45% 45%",
        sm: "100%",
      }}
      gridColumnGap="1rem"
      gridTemplateRows="auto"
      w="100%"
      m="0"
    >
      {isLoading ? (
        <>
          {SkeletonLoad.map((_skeleton: number, index: number) => (
            <SkeletonLoading key={index} />
          ))}
        </>
      ) : (
        <>
          {filterCountry.map((country: ICardCountry, index: number) => (
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
