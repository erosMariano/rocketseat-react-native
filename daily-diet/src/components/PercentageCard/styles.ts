import styled, { css } from "styled-components/native";
import ArrowUpRight from "phosphor-react-native/src/icons/ArrowUpRight";

interface ColorContainer {
  validateColor: boolean;
}
export const Container = styled.TouchableOpacity<ColorContainer>`
  background-color: ${(props) =>
    props.validateColor
      ? props.theme.COLORS.GREEN_LIGHT
      : props.theme.COLORS.RED_LIGHT};
  margin-top: 32px;
  margin-bottom: 32px;

  padding: 20px 16px;
  border-radius: 8px;

  align-items: center;
  position: relative;
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

interface OpenIconProps {
  valueCard: number;
}

export const OpenIcon = styled(ArrowUpRight).attrs<OpenIconProps>(({ theme, valueCard }) => ({
  size: theme.FONT_SIZE.XL,
  weight: 'regular',
}))`
  position: absolute; 
  top: 8px;
  right: 8px;
`;