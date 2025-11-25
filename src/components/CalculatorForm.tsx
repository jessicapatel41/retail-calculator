//imports here
import { FormLabel, FormControl, Input, VStack } from "@chakra-ui/react";

interface CalculatorFormProps {
  items: number | undefined;
  setItems: (value: number | undefined) => void;
  price: number | undefined;
  setPrice: (value: number | undefined) => void;
}

export const CalculatorForm = ({
  items,
  setItems,
  price,
  setPrice,
}: CalculatorFormProps) => {
  return (
    <>
      <VStack spacing={4} align="stretch" mb={4}>
        {/* Number of Items */}
        <FormControl id="quantity" mb={4} px={8}>
          <FormLabel>Number of Items</FormLabel>
          <Input
            type="number"
            value={items ?? undefined} //show placeholder when undefined
            onChange={(e) => {
              setItems(
                e.target.value === "" ? undefined : Number(e.target.value)
              );
            }}
            placeholder="Enter number of items"
          />
        </FormControl>

        {/* Price per Item */}
        <FormControl id="price" mb={4} px={8}>
          <FormLabel>Price per item</FormLabel>

          <Input
            type="number"
            value={price ?? ""}
            onChange={(e) => {
              setPrice(
                e.target.value === "" ? undefined : Number(e.target.value)
              );
            }}
            placeholder="Enter price per item"
          />
        </FormControl>
      </VStack>
    </>
  );
};
