import React from "react";
import { Container, Title, Icon } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
interface ButtonProps {
  title: string;
  iconName?: keyof typeof MaterialIcons.glyphMap;
}

export default function Button({ title, iconName }: ButtonProps) {
  return (
    <Container>
      {iconName && <Icon name={iconName} />}
      <Title>{title}</Title>
    </Container>
  );
}
