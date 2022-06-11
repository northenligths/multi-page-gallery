import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  VStack,
  Heading,
} from "@chakra-ui/react";

const SidebarContent = ({ onClick }) => (
  <>
    <Heading as="h1" size="xl" color={"#7AB5B3"} ml={50}>
      <i>DISECTO</i>
    </Heading>
    <VStack
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button onClick={onClick} w="100%" background={"#B6DCDE"}>
        Add Categories
      </Button>
      <Button onClick={onClick} w="100%" background={"#B6DCDE"}>
        View Categories
      </Button>
    </VStack>
  </>
);

const Sidebar = ({ isOpen, variant, onClose }) => {
  return variant === "sidebar" ? (
    <Box
      position="fixed"
      left={0}
      p={5}
      w="300px"
      top={0}
      h="100%"
      bg="ButtonShadow"
    >
      <SidebarContent onClick={onClose} />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <SidebarContent onClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;
