import {
  Text,
  SimpleGrid,
  Image,
  Flex,
  Stack,
  StackDivider,
  Box,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";

import { useState } from "react";
import { items } from "../../api/cards";
import ModalCard from "../modal";
import theme from "../../../styles/theme";

const CardItem = () => {
  const [selectedCard, setSelectedCard] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpenModal = (value) => {
    setSelectedCard(value);
    setOpen(!open);
  };

  return (
    <>
      <SimpleGrid
        id="pecas"
        columns={[1, 2, 4]}
        spacing={6}
        rowGap={10}
        p={2}
        placeItems="center"
        w="full"
      >
        {items.map((dataItem) => (
          <Box key={dataItem.id} boxShadow="0 0 10px rgba(0,0,0,0.3)" w="100%" overflow="hidden">
            <Image
              onClick={() => handleOpenModal(dataItem)}
              borderTopRadius="lg"
              w="100%"
              src={dataItem.href}
              alt={dataItem.alt}
            />
            <Stack
              divider={<StackDivider borderColor="gray.200" />}
              bg={useColorModeValue("pink.100", "purple.900")}
              p={2}
            >
              <Flex direction="column">
                <Heading fontSize={theme.fontSizes.lg}>{dataItem.name}</Heading>
                <Text fontSize={theme.fontSizes.sm}>{dataItem.desc}</Text>
              </Flex>
              <Text fontSize={theme.fontSizes.lg}>{dataItem.price}</Text>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
      <ModalCard open={open} setOpen={setOpen} selectedValue={selectedCard} />
    </>
  );
};
export default CardItem;
