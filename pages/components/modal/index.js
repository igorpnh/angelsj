import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useColorModeValue,
  Text,
  Flex,
  Icon,
  Box,
  Link,
  Button,
} from "@chakra-ui/react";
import Carousel from "../carousel";
import { TbCurrencyReal} from "react-icons/tb";
import {HiOutlineShoppingBag} from 'react-icons/hi'

const ModalCard = ({ selectedValue, open, setOpen }) => {
  const { isOpen, onClose } = useDisclosure({
    isOpen: open,
    onClose() {
      setOpen(!open);
    },
  });

  if (selectedValue) {
    return (
      <Modal
        isCentered
        key={selectedValue.id}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent
          background={useColorModeValue('rgba( 254, 215, 226, 0.5 )', 'rgba( 50, 38, 89, 0.6 )')}
          boxShadow="0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
          backdropFilter="blur(6px)"
          webkitBackdropFilter="blur(6px)"
          borderRadius="10px"
          border="1px solid rgba( 255, 255, 255, 0.18 )"
        >
          <ModalCloseButton />
          <ModalHeader>{selectedValue.name}</ModalHeader>
          <ModalBody>
            <Carousel selectedValue={selectedValue} />
          </ModalBody>
          <ModalFooter display="flex" justifyContent="space-between">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="start"
              gap="1rem"
            >
              {selectedValue.desc}
              <Flex alignItems="center" me="25px">
                <Icon
                  as={TbCurrencyReal}
                  w="20px"
                  h="20px"
                  me="6px"
                  color="green.400"
                />
                {selectedValue.sale ? (
                    <Flex gap='0.7rem'>
                    <Text color='gray.600' as='del' fontSize="md" my="auto" fontWeight="500">
                      {selectedValue.price}
                    </Text>
                    <Text fontSize='xl' my='auto' fontWeight='500'>
                      {selectedValue.salePrice}
                    </Text>
                    </Flex>
                  ) : (
                    <Text fontSize='xl' my='auto' fontWeight='500'>{selectedValue.price}</Text>
                  )}
              </Flex>
            </Box>
            <Box pt="10%">
              <Button
                colorScheme={useColorModeValue('black', 'white')}
                variant="ghost"
              >
                <Link
                target='_blank'
                href={`https://api.whatsapp.com/send?phone=5514996408058&text=Ol%C3%A1%2C%20gostaria%20de%20comprar%20esse%20item ${selectedValue.desc}!`}
                  display="flex"
                  align="center"
                  transition="150ms"
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  <Icon
                    as={HiOutlineShoppingBag}
                    w="20px"
                    h="20px"
                    me="6px"
                    color={useColorModeValue('black', 'white')}
                  />
                  Comprar
                </Link>
              </Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }
  return <Text>Não encontramos os detalhes desse produto :(</Text>;
};

export default ModalCard;
