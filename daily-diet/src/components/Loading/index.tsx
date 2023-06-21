import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

export default function Loading() {
  return (
    <Container>
      <LoadIndicator />
    </Container>
  );
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.COLORS.GRAY_700};
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_DARK,
}))``;