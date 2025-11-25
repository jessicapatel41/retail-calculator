import { Container, Heading, Text, Box } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <>
      <Box minH="100vh" bg="gray.100" py={10} borderRadius="lg">
        <Container maxW="lg" p={10}>
          <Box textAlign="center" mb={6}>
            <Heading size="xl">Retail Calculator</Heading>
            <Text mt={2}>
              Please enter the inputs below to calculate the total price.
            </Text>
          </Box>
        </Container>
        {/* //CalculatorForm component will be used here
      //<CalculatorForm /> */}

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
