import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  padding: 16px 24px;
  border-radius: 6px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 12px;
`;
export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.BASE}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 24,
  weight: 400
}))``;
