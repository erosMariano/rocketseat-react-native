import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

interface backgroundColorContainer {
  colorBG: string;
}
export const Container = styled(SafeAreaView)<backgroundColorContainer>`
  background-color: ${({ colorBG }) => colorBG};
  padding-bottom: 20px;
  margin-bottom: -20px;
`;

export const Content = styled(SafeAreaView)`
  background-color: #fff;
  flex: 1;
  width: 100%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding-left: 24px;
  padding-right: 24px;
  gap: 8px;
`;
export const DoubleCard = styled.View`
  flex-direction: row;
  gap: 8px;
  width: 100%;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  text-align: center;
  padding-bottom: 16px;
`;
