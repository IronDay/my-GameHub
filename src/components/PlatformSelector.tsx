import {
  Menu,
  MenuButton,
  Button,
  MenuItem,
  MenuList,
  Box,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Box paddingX={10}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Platorm
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem key={platform.id}>{platform.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PlatformSelector;
