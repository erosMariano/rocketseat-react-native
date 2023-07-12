import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

interface ValidateColorTitle {
  insideDiet: boolean;
}
export const Title = styled.Text<ValidateColorTitle>`
  text-align: center;
  ${({ theme, insideDiet }) => css`
    color: ${insideDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  margin-bottom: 8px;
`;
export const SubTitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.BASE}px;
  `}
`;
export const Strong = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
export const ImageHighlight = styled.Image`
  margin: 32px auto;
`;

export const ContainerButton = styled.View`
  width: 100%;
  margin: 0 auto;
`;
