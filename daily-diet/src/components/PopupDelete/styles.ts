import styled, { css } from "styled-components/native";

interface PopupDeleteStyle {
  visible: boolean;
}
export const Container = styled.View<PopupDeleteStyle>`
  background-color: rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  flex: 1;
  z-index: 1;

  display: ${({ visible }) => (visible ? "flex" : "none")} ;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;
export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  text-align: center;
  max-width: 279px;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  margin-top: 32px;
  gap: 12px;
`;
interface ColorButtonInfo {
  colorButtonInfo: "white" | "black";
}
export const Button = styled.TouchableOpacity<ColorButtonInfo>`
  padding: 12px 24px;
  border-radius: 6px;

  ${({ theme, colorButtonInfo }) => css`
    background-color: ${colorButtonInfo === "white"
      ? theme.COLORS.GRAY_700
      : theme.COLORS.GRAY_200};

    border: 1px solid
      ${colorButtonInfo === "white"
        ? theme.COLORS.GRAY_200
        : theme.COLORS.GRAY_700};
  `}
`;

export const TextButton = styled.Text<ColorButtonInfo>`
  ${({ theme, colorButtonInfo }) => css`
    color: ${colorButtonInfo === "white"
      ? theme.COLORS.GRAY_200
      : theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
