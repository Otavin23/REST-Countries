import { Header } from "../../components/header";
import { useState, useEffect, useRef } from "react";
import { Flex, Container } from "@chakra-ui/react";
import { FilterCountries } from "../../components/filterCountries";
import { api } from "../../service/api";
import { FilterSelect } from "../../components/filterSelect";

const Home = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get("/all");
        setData(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />

      <Flex as="main" justify="center">
        <Container maxW="1400px" w="95%">
          <FilterSelect inputRef={inputRef} setSearchInput={setSearchInput}/>

          <FilterCountries data={data} />
        </Container>
      </Flex>
    </>
  );
};

export { Home };
