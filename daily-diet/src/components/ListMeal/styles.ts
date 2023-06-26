import styled, { css } from "styled-components/native";
import Circle from "phosphor-react-native/src/icons/Circle";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  padding: 14px 12px;
  margin-bottom: 8px;

  padding-right: 24px;

  flex-direction: row;
  align-items: center;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SpanLine = styled.Text`
  width: 1px;
  height: 14px;
  background-color: ${({theme}) => theme.COLORS.GRAY_400}; 
  margin: 0 8px;
`
export const Hour = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Title = styled.Text`

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.BASE}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};

  flex: 1;
`;

export const Icon = styled(Circle).attrs(() => ({
  weight: "fill",
  size: 14,
}))``;
