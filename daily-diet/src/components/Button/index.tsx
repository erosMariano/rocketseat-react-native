import React from "react";
import { Container, Title, Icon } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  iconName?: keyof typeof MaterialIcons.glyphMap;
}

export default function Button({ title, iconName, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      {iconName && <Icon name={iconName} />}
      <Title>{title}</Title>
    </Container>
  );
}
