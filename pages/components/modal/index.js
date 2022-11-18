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
        <ModalBody>{selectedValue.desc}</ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal> 
  );
} return (
  <Text>Deu bug aqui</Text>
)
};

export default ModalCard;