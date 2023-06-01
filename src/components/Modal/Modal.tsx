import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import ButtonForm from "../Button/Button";

const ModalForm = ({
  title,
  description,
  isOpen,
  onClose,
}: {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{description}</ModalBody>

        <ModalFooter>
          <ButtonForm color="blue" size="lg" onClick={onClose} type={"button"}>
            Fechar
          </ButtonForm>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalForm;
