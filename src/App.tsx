import { Container, Heading, Text, Box } from "@chakra-ui/react";
import "./App.css";
import { CalculatorForm } from "./components/CalculatorForm";
import { useState } from "react";

function App() {
  //state for number of items
  const [items, setItems] = useState<number | undefined>(undefined);
  return (
    <>
      <Box minH="100vh" bg="gray.100" py={10} borderRadius="lg">
        <Container maxW="lg" p={10}>
          {/* Main Heading and Sub Text */}
          <Box textAlign="center" mb={6}>
            <Heading size="xl">Retail Calculator</Heading>
            <Text mt={2}>
              Please enter the inputs below to calculate the total price.
            </Text>
          </Box>
        </Container>

        {/* Calculator form inputs are here */}
        <CalculatorForm items={items} setItems={setItems} />
        <Box
          borderWidth="1px"
          borderRadius="lg"
          p={6}
          m={4}
          shadow="sm"
          background="white"
        >
          <Text color="gray.500">Form Results will go here</Text>
        </Box>

        {/* //ResultsCard component will be used here
      <ResultsCard />  */}
      </Box>
    </>
  );
}

export default App;
