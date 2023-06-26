import ArrowLeft from "phosphor-react-native/src/icons/ArrowLeft";
import { formatPercentagePoint } from "@utils/formatPercentagePoint";
import React from "react";
import { View } from "react-native";
import { useTheme } from "styled-components/native";
import {
  BackButton,
  Container,
  ContainerInfosPercentage,
  Subtitle,
  TitleHeader,
  ValuePercentage,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  title?: string;
  percentage?: number;
}
export default function Header({ title, percentage }: HeaderProps) {
  const navigation = useNavigation();

  function handleBackScreen() {
    navigation.goBack();
  }
  const { COLORS } = useTheme();

  const validateColor = percentage
    ? percentage > 50
      ? "POSITIVE"
      : "NEGATIVE"
    : "";

  const setColorIcon =
    validateColor === "POSITIVE"
      ? COLORS.GREEN_DARK
      : validateColor === "NEGATIVE"
      ? COLORS.RED_DARK
      : COLORS.GRAY_200;

  return (
    <Container>
      <View>
        <BackButton
          positionValue={title ? true : false}
          onPress={handleBackScreen}
        >
          <ArrowLeft size={24} color={setColorIcon} />
        </BackButton>
        {title && <TitleHeader>{title}</TitleHeader>}
      </View>

      {percentage && (
        <ContainerInfosPercentage>
          <ValuePercentage>
            {formatPercentagePoint(percentage)}%
          </ValuePercentage>
          <Subtitle>das refeições dentro da dieta</Subtitle>
        </ContainerInfosPercentage>
      )}
    </Container>
  );
}
