import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
  maxChars: number;
}

const ExpandableText = ({ children, maxChars }: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>();

  if (!children) return null;

  const shortText = isExpanded
    ? children
    : children.substring(0, maxChars) + "...";

  return (
    <Text>
      {shortText}
      {children.length > 300 && (
        <Button
          size={"xs"}
          fontWeight={"bold"}
          colorScheme={"yellow"}
          marginLeft={1}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {!isExpanded ? "Show More" : "Show Less"}
        </Button>
      )}
    </Text>
  );
};

export default ExpandableText;
