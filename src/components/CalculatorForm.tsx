//imports here
import {
  FormLabel,
  FormControl,
  Input,
  VStack,
  Select,
} from "@chakra-ui/react";

interface CalculatorFormProps {
  items: number | undefined;
  setItems: (value: number | undefined) => void;
  price: number | undefined;
  setPrice: (value: number | undefined) => void;
  region: string;
  setRegion: (value: string) => void;
}

export const CalculatorForm = ({
  items,
  setItems,
  price,
  setPrice,
  region,
  setRegion,
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

        {/* Region Selection */}
        <FormControl id="region" mb={4} px={8}>
          <FormLabel>Region</FormLabel>
          <Select
            placeholder="Select region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            <option value="AUK">AUK</option>
            <option value="WLG">WLG</option>
            <option value="WAI">WAI</option>
            <option value="CHC">CHC</option>
            <option value="TAS">TAS</option>
          </Select>
        </FormControl>
      </VStack>
    </>
  );
};
