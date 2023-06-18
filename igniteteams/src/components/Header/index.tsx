import React from "react";
import { BackButton, Container, Logo } from "./styles";
import LogoImg from "@assets/logo.png";
import { CaretLeft } from "phosphor-react-native";

interface Props {
  showBackButton: boolean;
}
export default function Header() {
  return (
    <Container>
      <BackButton>
        {/* <CaretLeft size={32} /> */}
      </BackButton>
      <Logo source={LogoImg} />
    </Container>
  );
}
