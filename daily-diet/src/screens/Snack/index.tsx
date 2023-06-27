import Header from "@components/Header";
import React from "react";
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
import Button from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import PopupDelete from "@components/PopupDelete";
import { Alert } from "react-native";

export default function Snack() {
  const insideDiet = true;

  const navigation = useNavigation();

  function handleEditSnack() {
    navigation.navigate("editSnack");
  }
  function handleDeleteSnack() {

  }

  return (
    <Container insideDiet={insideDiet}>
      <Header title="Refeição" />
      <PopupDelete />
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
            onPress={handleDeleteSnack}
          />
        </ContainerButtons>
      </Content>
    </Container>
  );
}
