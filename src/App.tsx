import { ChakraBaseProvider } from "@chakra-ui/react";
import { themeChakra } from "./styles/themeProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { InformationCountry } from "./pages/informationCountry";
import { Header } from "./components/header";

const App = () => {
  return (
    <ChakraBaseProvider theme={themeChakra}>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/information/:name" element={<InformationCountry />} />
        </Routes>
      </BrowserRouter>
    </ChakraBaseProvider>
  );
};

export default App;
