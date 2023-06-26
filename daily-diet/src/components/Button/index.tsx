import React from "react";
import { Container, Title, Icon } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  iconName?: keyof typeof MaterialIcons.glyphMap;
  inverseColor?: boolean;
}

export default function Button({
  title,
  iconName,
  inverseColor = false,
  ...rest
}: ButtonProps) {
  return (
    <Container inverseColor={inverseColor} {...rest}>
      {iconName && <Icon inverseColor={inverseColor} name={iconName} />}
      <Title inverseColor={inverseColor}>{title}</Title>
    </Container>
  );
}
