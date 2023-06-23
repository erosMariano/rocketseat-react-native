import React from "react";
import { useTheme } from "styled-components";
import { Container, Quantity, Subtitle } from "./styles";

interface StatisticsCardProps {
  quantity: number;
  subtitle: string;
  typeCard: "POSITIVE" | "NEGATIVE" | "NEUTRAL";
}
export default function StatisticsCard({
  quantity,
  subtitle,
  typeCard,
}: StatisticsCardProps) {
  const { COLORS } = useTheme();

  const colorCard =
    typeCard === "POSITIVE"
      ? COLORS.GREEN_LIGHT
      : typeCard === "NEGATIVE"
      ? COLORS.RED_LIGHT
      : COLORS.GRAY_600;
  return (
    <Container colorCard={colorCard}>
      <Quantity>{quantity}</Quantity>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
