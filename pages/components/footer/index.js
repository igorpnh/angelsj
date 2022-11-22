import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  useMediaQuery
} from "@chakra-ui/react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={10}
      h={10}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target='_blank'
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  const [isSmallerThan764] = useMediaQuery("(max-width: 764px)");
  return (
    <Box
      mt={isSmallerThan764 ? "2.5rem" : "8rem"}
      bg={useColorModeValue("pink.200", "purple.500")}
      color={useColorModeValue("black", "white")}
    >
      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2022 Angel SemiJoias. Todos direitos reservados</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Whatsapp"} href={"https://api.whatsapp.com/send?phone=5514996408058"}>
              <FaWhatsapp/>
            </SocialButton>
            <SocialButton label={"Instagram"} href={"https://www.instagram.com/semijoiass.angel/"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
