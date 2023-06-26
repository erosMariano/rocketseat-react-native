import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

interface ColorContainer {
  inverseColor: boolean;
}
export const Container = styled.TouchableOpacity<ColorContainer>`
  background-color: ${({ theme, inverseColor }) =>
    inverseColor ? "transparent" : theme.COLORS.GRAY_200};
  border: 1px solid
    ${({ theme, inverseColor }) =>
      inverseColor ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_200};

  padding: 16px 24px;
  border-radius: 6px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 12px;
`;
export const Title = styled.Text<ColorContainer>`
  ${({ theme, inverseColor }) => css`
    color: ${inverseColor ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.BASE}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Icon = styled(MaterialIcons).attrs<ColorContainer>(({ theme, inverseColor }) => ({
  color: inverseColor ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE,
  size: 24,
  weight: 400,
}))``;
