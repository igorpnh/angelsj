import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

export const ModalCard = ({ selectedValue, open, setOpen }) => {
  const { isOpen, onClose } = useDisclosure({
    isOpen: open,
    onClose(){
        setOpen(!open)
    }
  });


  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedValue.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{selectedValue.desc}</ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
