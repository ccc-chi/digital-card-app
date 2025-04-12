import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box bg="gray.100" minH="100vh">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Box>
  );
}

export default App;
