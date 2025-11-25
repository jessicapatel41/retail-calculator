import { Box, Heading, Text, VStack } from "@chakra-ui/react";

interface ResultsCardProps {
  orderValue?: number;
  discountedValue?: number;
  taxedValue?: number;
  region: string;
}

export default function ResultsCard({
  orderValue,
  discountedValue,
  taxedValue,
  region,
}: ResultsCardProps) {
  if (!orderValue || !region) return null; // nothing to show yet

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" bg="gray.50">
      <Heading size="md" mb={3}>
        Summary
      </Heading>

      <VStack align="stretch" spacing={2} fontSize="md">
        <Text>
          Order Value: <strong>${orderValue.toFixed(2)}</strong>
        </Text>

        <Text>
          After Discount: <strong>${discountedValue?.toFixed(2)}</strong>
        </Text>

        <Text>
          After Tax ({region}): <strong>${taxedValue?.toFixed(2)}</strong>
        </Text>

        <Box pt={2} borderTop="1px solid #ddd">
          <Text fontSize="lg" fontWeight="bold">
            Final Total: ${taxedValue?.toFixed(2)}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}
