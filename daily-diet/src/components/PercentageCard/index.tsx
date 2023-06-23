import React from "react";
import { Container, OpenIcon, Subtitle, ValuePercentage } from "./styles";
import { useTheme } from "styled-components";

interface PercentageCardProps {
  percentage: number;
  onOpenStatistics: () => void
}
export default function PercentageCard({ percentage, onOpenStatistics}: PercentageCardProps) {
  const { COLORS } = useTheme();

  const valuePercentage = percentage > 50;
  return (
    <Container
      validateColor={valuePercentage}
      onPress={onOpenStatistics}
    >
      <OpenIcon color={valuePercentage ? COLORS.GREEN_DARK : COLORS.RED_DARK} />
      <ValuePercentage>{percentage}%</ValuePercentage>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  );
}
