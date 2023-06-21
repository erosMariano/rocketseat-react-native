import React from "react";
import styled, { css } from "styled-components/native";
import Circle from "phosphor-react-native/src/icons/Circle";
import { useTheme } from "styled-components";

interface ListMealProps {
  foodName: string;
  hour: number;
  status: "POSITIVE" | "NEGATIVE";
}
export default function ListMeal({ foodName, hour, status }: ListMealProps) {
  const { COLORS } = useTheme();
  const colorStatus = status === "POSITIVE" ? COLORS.GREEN_MID : COLORS.RED_MID;

  return (
    <Container>
      <ContainerTitle>
        <Hour>{String(hour / 60).padStart(2, ":0").padEnd(5, ":00")}</Hour>
        <SpanLine/>
        <Title>{foodName}</Title>
      </ContainerTitle>
      <Icon color={colorStatus} />
    </Container>
  );
}

export const Container = styled.TouchableOpacity`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  padding: 14px 12px;
  margin-bottom: 8px;

  padding-right: 24px;

  flex-direction: row;
  align-items: center;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SpanLine = styled.Text`
  width: 1px;
  height: 14px;
  background-color: ${({theme}) => theme.COLORS.GRAY_400}; 
  margin: 0 8px;
`
export const Hour = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Title = styled.Text`

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.BASE}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};

  flex: 1;
`;

export const Icon = styled(Circle).attrs(() => ({
  weight: "fill",
  size: 14,
}))``;
