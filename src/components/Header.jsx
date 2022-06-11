import { Box, Center, IconButton, Text, Flex } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Header = ({ showSidebarButton = true, onShowSidebar }) => {
  return (
    <Flex bg="ButtonShadow" p={4} color="black" justifyContent="center">
      <Box flex="1">
        {showSidebarButton && (
          <IconButton
            icon={<ChevronRightIcon w={8} h={8} />}
            colorScheme="blackAlpha"
            variant="outline"
            onClick={onShowSidebar}
          />
        )}
      </Box>
      <Center flex="1" h="40px">
        <Text fontSize="3xl" color={"#7AB5B3"}>
          <Text fontSize={{ base: "24px", md: "40px", lg: "35px" }}>
            <i>Multi Page Gallery</i>
          </Text>
        </Text>
      </Center>
      <Box flex="1" />
    </Flex>
  );
};

export default Header;
