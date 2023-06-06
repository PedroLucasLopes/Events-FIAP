import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Checkbox,
} from "@chakra-ui/react";

const ModalForm = ({
  title,
  description,
  isOpen,
  onClose,
  onChange,
}: {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  onChange?: () => void;
  setChecked?: () => React.Dispatch<boolean>;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{description}</ModalBody>
        <ModalFooter justifyContent="left" alignItems="center">
          <Checkbox
            fontWeight="bold"
            onChange={(e) => {
              e.currentTarget.checked ? onChange : "";
            }}
          >
            Li e aceito o uso das minhas informações
          </Checkbox>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalForm;
