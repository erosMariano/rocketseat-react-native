import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

interface BulletColor {
  insideDiet: boolean;
}
export const Container = styled(SafeAreaView)<BulletColor>`
  flex: 1;
  width: 100%;
  background-color: ${({ theme, insideDiet }) => insideDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Content = styled.View`
  flex: 1;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  padding: 24px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-bottom: 8px;
`;
export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.BASE}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  margin-bottom: 24px;
`;
export const TitleHour = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-bottom: 8px;
`;
export const DateInfo = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.BASE}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  margin-bottom: 24px;
`;
export const Tag = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  padding: 8px 16px;
  border-radius: 100px;
  flex-direction: row;
  display: flex;
  gap: 8px;

  align-items: center;
  justify-content: center;
  text-align: center;

  max-width: 144px;
  gap: 8px;
`;

export const TextBullet = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const BulletPoint = styled.View<BulletColor>`
  height: 8px;
  width: 8px;
  border-radius: 100px;
  background-color: ${({ insideDiet, theme }) =>
    insideDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const ContainerButtons = styled.View`
  flex: 1;
  justify-content: flex-end;
  gap: 8px;
`;
