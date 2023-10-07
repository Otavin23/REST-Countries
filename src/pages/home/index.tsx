import { Header } from "../../components/header";
import { useState, useEffect } from "react";
import { Flex, Container } from "@chakra-ui/react";
import { FilterCountries } from "../../components/filterCountries";
import { api } from "../../service/api";

const Home = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

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
          <input
            type="text"
            placeholder="hello"
            value={input}
            onChange={({ target }) => setInput(target.value)}
          />

          {/* Use React.memo para memoizar FilterCountries */}
          <FilterCountries data={data} />
        </Container>
      </Flex>
    </>
  );
};

export { Home };
