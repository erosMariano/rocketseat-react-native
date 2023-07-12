import Button from "@components/Button";
import Header from "@components/Header";
import PopupDelete from "@components/PopupDelete";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  BulletPoint,
  Container,
  ContainerButtons,
  Content,
  DateInfo,
  Description,
  Tag,
  TextBullet,
  Title,
  TitleHour,
} from "./styles";

export default function Snack() {
  const [openModal, setOpenModal] = useState(false);

  const insideDiet = true;
  const navigation = useNavigation();

  function handleEditSnack() {
    navigation.navigate("editSnack");
  }
  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  } 

  function handleDeleteSnackInModal(){
    setOpenModal(false);
  }

  

  return (
    <Container insideDiet={insideDiet}>
      <Header title="Refeição" />
      <PopupDelete onDeleteSnack={handleDeleteSnackInModal} onCloseModal={handleCloseModal} visible={openModal} />
      <Content>
        <Title>Sanduíche</Title>
        <Description>
          Sanduíche de pão integral com atum e salada de alface e tomate
        </Description>

        <TitleHour>Data e hora</TitleHour>
        <DateInfo>12/08/2022 às 16:00</DateInfo>

        <Tag>
          <BulletPoint insideDiet={insideDiet} />
          <TextBullet>dentro da dieta</TextBullet>
        </Tag>

        <ContainerButtons>
          <Button
            iconName="edit"
            title="Editar refeição"
            onPress={handleEditSnack}
          />
          <Button
            inverseColor
            iconName="delete"
            title="Excluir refeição"
            onPress={handleOpenModal}
          />
        </ContainerButtons>
      </Content>
    </Container>
  );
}
