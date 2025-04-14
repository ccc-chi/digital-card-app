import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box bg="gray.100" minH="100vh">
      <Box w={"90%"} minW={"300px"} maxW={"600px"} mx={"auto"} pt={8}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Box>
    </Box>
  );
}

export default App;
