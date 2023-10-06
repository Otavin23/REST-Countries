import { ChakraBaseProvider } from "@chakra-ui/react";
import { themeChakra } from "./styles/themeProvider";

const App = () => {
  return <ChakraBaseProvider theme={themeChakra}></ChakraBaseProvider>;
};

export default App;
