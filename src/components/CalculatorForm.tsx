//imports here
import { FormLabel, FormControl, Input } from "@chakra-ui/react";

//interface for props
interface CalculatorFormProps {
  items: number | undefined;
  setItems: (value: number) => void;
}

export const CalculatorForm = ({ items, setItems }: CalculatorFormProps) => {
  //function to handle input change
  const handleChange = (valueString: string) => {
    const value = valueString === "" ? undefined : Number(valueString); //convert to number or undefined
    setItems(value!); //update state in parent
  };

  return (
    <>
      <FormControl id="quantity" mb={4} px={8}>
        <FormLabel>Number of Items</FormLabel>
        <Input
          type="number"
          value={items ?? undefined} //show placeholder when undefined
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Enter number of items"
        />
      </FormControl>
    </>
  );
};
