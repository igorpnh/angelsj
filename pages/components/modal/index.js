import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text
} from "@chakra-ui/react";
import Carousel from "../carousel";

const ModalCard = ({ selectedValue, open, setOpen }) => {
  const { isOpen, onClose } = useDisclosure({
    isOpen: open,
    onClose(){
        setOpen(!open)
    }
  });
  

if (selectedValue) {
  return (
      <Modal isCentered key={selectedValue.id} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{selectedValue.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody><Carousel selectedValue={selectedValue}/></ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal> 
  );
} return (
  <Text>Não encontramos os detalhes desse produto :(</Text>
)
};

export default ModalCard;