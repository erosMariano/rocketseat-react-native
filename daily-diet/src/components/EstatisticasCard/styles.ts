import styled, { css } from "styled-components/native";

interface ContainerProps {
  colorCard: string;
}
export const Container = styled.View<ContainerProps>`
  background-color: ${({ colorCard }) => colorCard};
  border-radius: 8px;
  padding: 16px;

  align-items: center;
  justify-content: center;
  width: auto;
  flex: 1;
  max-height: 107px;
`;

export const Quantity = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  width: auto;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  text-align: center;
  width: auto;
`;
