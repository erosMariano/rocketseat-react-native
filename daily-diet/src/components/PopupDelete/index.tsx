import React from "react";
import {
  Button,
  Container,
  ContainerButtons,
  Modal,
  TextButton,
  Title,
} from "./styles";

interface PopupDeleteProps {
  visible: boolean;
  onCloseModal: () => void;
  onDeleteSnack: () => void;
}
export default function PopupDelete({
  visible,
  onCloseModal,
  onDeleteSnack,
}: PopupDeleteProps) {
  return (
    <Container visible={visible}>
      <Modal>
        <Title>Deseja realmente excluir o registro da refeição?</Title>

        <ContainerButtons>
          <Button colorButtonInfo="white" onPress={onCloseModal}>
            <TextButton colorButtonInfo="white">Cancelar</TextButton>
          </Button>
          <Button colorButtonInfo="black" onPress={onDeleteSnack}>
            <TextButton colorButtonInfo="black" >
              Sim, excluir
            </TextButton>
          </Button>
        </ContainerButtons>
      </Modal>
    </Container>
  );
}
