import React from "react";
import { Container, SubTitle, Title } from "./styles";

interface HighLightProps {
  title: string;
  subtitle: string;
}

export default function HighLight({ subtitle, title }: HighLightProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
}
