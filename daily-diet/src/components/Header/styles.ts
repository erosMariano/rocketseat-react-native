import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: column;
  padding: 24px;
  position: relative;
  max-height: 200px;
`;


interface BackButtonInfo {
  positionValue: boolean;
}
export const BackButton = styled(TouchableOpacity)<BackButtonInfo>`
  position: ${({ positionValue }) => (positionValue ? "absolute" : "relative")};
  z-index: 1;
`;

export const TitleHeader = styled.Text`
  text-align: center;
  width: 100%;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const ValuePercentage = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const ContainerInfosPercentage = styled.View`
  justify-content: center;
  align-items: center;
`;
