import {
  Box,
  Flex,
  useColorModeValue,
  Icon,
  Image,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { TbCurrencyReal } from "react-icons/tb";
import { RiEyeLine } from "react-icons/ri";

import { useState } from "react";
import { items } from "../../api/cards";
import ModalCard from "../modal";

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
        columns={[1, 2, 3, 4]}
        spacing={4}
        rowGap="4rem"
        p={2}
        placeItems="center"
        w="full"
      >
        {items.map((dataItem) => (
          <Flex
            key={dataItem.id}
            borderRadius="20px"
            h="375px"
            direction="column"
            bg={useColorModeValue("pink.100", "purple.900")}
          >
            <Box>
              <Box mb="10px">
                <Image
                  onClick={() => handleOpenModal(dataItem)}
                  cursor='pointer'
                  w="130%"
                  h="300px"
                  src={dataItem.img[0]}
                  borderTopRadius="lg"
                  me="auto"
                />
              </Box>
              <Box px="20px">
                <Text fontWeight="600" w="100%" fontSize="2xl">
                  {dataItem.name}
                </Text>
              </Box>
            </Box>
            <Flex
              w="10 0%"
              px="20px"
              borderBottomLeftRadius="inherit"
              borderBottomRightRadius="inherit"
              height="100%"
              direction="column"
              bg={useColorModeValue("pink.100", "purple.900")}
            >
              <Text
                fontSize="sm"
                color="gray.500"
                lineHeight="24px"
                pe="40px"
                fontWeight="500"
                mb="auto"
              >
                {dataItem.desc}
              </Text>
              <Flex pb={3} justify="space-between">
                <Flex alignItems="center" me="25px">
                  <Icon
                    as={TbCurrencyReal}
                    w="20px"
                    h="20px"
                    me="6px"
                    color="green.400"
                  />
                  {dataItem.sale ? (
                    <Flex gap="0.7rem">
                      <Text
                        color="gray.600"
                        as="del"
                        fontSize="md"
                        my="auto"
                        fontWeight="500"
                      >
                        {dataItem.price}
                      </Text>
                      <Text fontSize="xl" my="auto" fontWeight="500">
                        {dataItem.salePrice}
                      </Text>
                    </Flex>
                  ) : (
                    <Text fontSize="xl" my="auto" fontWeight="500">
                      {dataItem.price}
                    </Text>
                  )}
                </Flex>
                <Flex>
                  <Icon
                    cursor="pointer"
                    onClick={() => handleOpenModal(dataItem)}
                    as={RiEyeLine}
                    w="20px"
                    h="20px"
                    me="6px"
                    _hover={{ transform: "scale(1.3)" }}
                  />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </SimpleGrid>
      <ModalCard open={open} setOpen={setOpen} selectedValue={selectedCard} />
    </>
  );
};
export default CardItem;
