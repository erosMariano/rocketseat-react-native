import React from "react";
import { Button, Container, ContainerButtons, Modal, TextButton, Title } from "./styles";

export default function PopupDelete() {
  return (
    <Container>
      <Modal>
        <Title>Deseja realmente excluir o registro da refeição?</Title>

        <ContainerButtons>
          <Button colorButtonInfo="white">
            <TextButton colorButtonInfo="white">Cancelar</TextButton>
          </Button>
          <Button colorButtonInfo="black">
            <TextButton colorButtonInfo="black">Sim, exluir</TextButton>
          </Button>
        </ContainerButtons>
      </Modal>
    </Container>
  );
}
