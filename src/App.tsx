import { Container, Heading, Text, Box } from "@chakra-ui/react";
import "./App.css";
import { CalculatorForm } from "./components/CalculatorForm";
import { useState } from "react";
import { applyDiscount } from "./utils/calculateDiscount";
import { applyTax } from "./utils/calculateTax";

function App() {
  //state for number of items
  const [items, setItems] = useState<number | undefined>(undefined);
  const [price, setPrice] = useState<number | undefined>(undefined);
  const [region, setRegion] = useState<string>("");

  // Calculate order and discounted value
  const orderValue =
    items !== undefined && price !== undefined ? items * price : undefined;
  const discountedValue =
    orderValue !== undefined ? applyDiscount(orderValue) : undefined;

  //Calculate final value with tax
  const taxedValue =
    discountedValue !== undefined && region
      ? applyTax(discountedValue, region)
      : undefined;

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
        <CalculatorForm
          items={items}
          setItems={setItems}
          price={price}
          setPrice={setPrice}
          region={region}
          setRegion={setRegion}
        />
        <Box
          borderWidth="1px"
          borderRadius="lg"
          p={6}
          m={4}
          shadow="sm"
          background="white"
        >
          {/* TEMP result values */}
          <Text fontWeight="bold">Form Results</Text>
          {discountedValue !== undefined && (
            <Text mt={4} fontWeight="light">
              Discounted Subtotal: ${discountedValue.toFixed(2)}
            </Text>
          )}
          {taxedValue !== undefined && (
            <Text mt={2} fontWeight="light">
              Subtotal With Tax: ${taxedValue.toFixed(2)}
            </Text>
          )}
        </Box>

        {/* //ResultsCard component will be used here
      <ResultsCard />  */}
      </Box>
    </>
  );
}

export default App;
