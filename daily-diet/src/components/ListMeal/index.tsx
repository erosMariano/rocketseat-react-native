import React from "react";
import styled, { css } from "styled-components/native";
import { useTheme } from "styled-components";
import {
  Container,
  ContainerTitle,
  Hour,
  Icon,
  SpanLine,
  Title,
} from "./styles";
import { TouchableOpacityProps } from "react-native";

interface ListMealProps extends TouchableOpacityProps {
  foodName: string;
  hour: string;
  status: boolean;
}
export default function ListMeal({
  foodName,
  hour,
  status,
  ...rest
}: ListMealProps) {
  const { COLORS } = useTheme();
  const colorStatus = status ? COLORS.GREEN_MID : COLORS.RED_MID;

  return (
    <Container {...rest}>
      <ContainerTitle>
        <Hour>{hour}</Hour>
        <SpanLine />
        <Title>{foodName}</Title>
      </ContainerTitle>
      <Icon color={colorStatus} />
    </Container>
  );
}
