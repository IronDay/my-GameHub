import { Box, Heading, Text } from "@chakra-ui/react";
import { Platform } from "../entities/Platform";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode[] | ReactNode;
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
