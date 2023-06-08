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
import ButtonForm from "../Button/Button";
import { useState } from "react";

const ModalForm = ({
  title,
  description,
  isOpen,
  onClose,
  onClick,
}: {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  onClick: () => void;
  setChecked?: () => React.Dispatch<boolean>;
}) => {
  const [isChecked, setIsChecked] = useState(false);
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
              setIsChecked(e.currentTarget.checked);
            }}
          >
            Li e aceito o uso das minhas informações
          </Checkbox>
          <ButtonForm
            isDisabled={isChecked}
            onClick={() => onClick()}
            type={"button"}
            color="blue"
          >
            Entrar
          </ButtonForm>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalForm;
