import ImageSuccess from "@assets/success_diet.png";
import ImageLose from "@assets/lose_diet.png";

import Button from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import React, { ReactElement } from "react";
import {
  Container,
  ContainerButton,
  ImageHighlight,
  Strong,
  SubTitle,
  Title,
} from "./styles";
import { TextProps } from "react-native";

interface FeedbackScreenProps {
  title: string;
  subTitle: ReactElement;
  insideDiet: boolean;
}
export default function FeedbackScreen({
  title,
  subTitle,
  insideDiet,
}: FeedbackScreenProps) {
  const navigation = useNavigation();

  function handleGoToHome() {
    navigation.navigate("home");
  }

  return (
    <Container>
      <Title insideDiet={insideDiet}>{title}</Title>
      <SubTitle>
        {subTitle}
        {/* Você continua <Strong>dentro da dieta</Strong>. Muito bem! */}
      </SubTitle>

      <ImageHighlight source={insideDiet ? ImageSuccess : ImageLose} />
      <ContainerButton>
        <Button title="Ir para a página inicial" onPress={handleGoToHome} />
      </ContainerButton>
    </Container>
  );
}
