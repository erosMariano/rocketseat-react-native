import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";


export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Content = styled.ScrollView`
  padding: 24px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex: 1; 

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  flex-direction: column;
`;

export const Input = styled.TextInput`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  min-height: 48px;
  margin-bottom: 24px;
  padding: 0 16px;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.BASE}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const TitleInput = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-bottom: 4px;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  gap: 20px;
`;
export const DetailsInfo = styled.View`
  flex: 1;
`;

export const ContainerButtons = styled.View`
  justify-content: flex-end;
  flex: 1; 
  margin-bottom: 130px;
`;


export const RowContainerButtons = styled.View`
  flex-direction: row;
  gap: 8px;
`;

interface ButtonDietProps {
  active: boolean;
  value: "0" | "1";
}
export const ButtonDiet = styled.TouchableOpacity<ButtonDietProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  max-height: 50px;
  border-radius: 6px;
  border: 1px solid transparent;
  ${({ theme, active, value }) => css`
    background-color: ${active === false && value === "0"
      ? theme.COLORS.RED_LIGHT
      : active && value === "1"
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.GRAY_600};

    border: 1px solid
      ${active === false && value === "0"
        ? theme.COLORS.RED_DARK
        : active && value === "1"
        ? theme.COLORS.GREEN_DARK
        : theme.COLORS.GRAY_600};

    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
