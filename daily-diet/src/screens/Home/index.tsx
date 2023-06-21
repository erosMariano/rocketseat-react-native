import Avatar from "@assets/avatar.png";
import Logo from "@assets/logo.png";
import Button from "@components/Button";
import PercentageCard from "@components/PercentageCard";
import React, { useState } from "react";
import { Image, SectionList, Text } from "react-native";
import { MealsProps } from "src/@types/types";
import { Container, Header, Meals, SubtitleHome, Title } from "./styles";
import { formatDate } from "@utils/FormatDate";
import ListMeal from "@components/ListMeal";

export default function Home() {
  const [mealsData, setMealsData] = useState<MealsProps[]>([
    {
      title: new Date(),
      data: [
        {
          id: "osjaoskaoska",
          foodName: "X-tudo",
          description: "Xis completo da lancheria do bairro",
          hour: 900,
          status: "NEGATIVE",
        },
      ],
    },
    {
      title: new Date(),
      data: [
        {
          id: "osjaoskaos2dasdska",
          foodName: "X-tudo 2",
          description: "Xis completo da lancheria do bairro",
          hour: 900,
          status: "NEGATIVE",
        },
        {
          id: "osjaosasasaskaos2dasdska",
          foodName: "X-tudo 3",
          description: "Xis completo da lancheria do bairro",
          hour: 900,
          status: "POSITIVE",
        },
      ],
    },
  ]);

  return (
    <Container>
      <Header>
        <Image source={Logo} />
        <Image source={Avatar} />
      </Header>

      <PercentageCard percentage={45.86} />

      <Meals>
        <SubtitleHome>Refeições</SubtitleHome>
        <Button title="Nova refeição" iconName="add" />

        <SectionList
          style={{ marginTop: 32 }}
          sections={mealsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListMeal
              foodName={item.foodName}
              hour={item.hour}
              status={item.status}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Title>{formatDate(title)}</Title>
          )}
        />
      </Meals>
    </Container>
  );
}
