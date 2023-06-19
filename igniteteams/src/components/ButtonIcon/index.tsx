import { TouchableOpacityProps } from "react-native";
import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

interface ButtonIconProps extends TouchableOpacityProps {
  iconName: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
}
export const ButtonIcon = ({
  iconName,
  type = "PRIMARY",
  ...rest
}: ButtonIconProps) => {
  return (
    <Container {...rest}>
      <Icon name={iconName} type={type} />
    </Container>
  );
};
