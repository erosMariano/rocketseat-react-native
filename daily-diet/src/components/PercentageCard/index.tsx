import { View, Text } from "react-native";
import React from "react";
import { Container, OpenIcon, Subtitle, ValuePercentage } from "./styles";

interface PercentageCardProps {
  percentage: number;
}
export default function PercentageCard({ percentage }: PercentageCardProps) {
  return (
    <Container validateColor={percentage > 50} onPress={() => console.log("Abrir dieta (Estatísticas)")}>
      <OpenIcon />
      <ValuePercentage>{percentage}%</ValuePercentage>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  );
}
