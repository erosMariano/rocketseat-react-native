import Avatar from "@assets/avatar.png";
import Logo from "@assets/logo.png";
import Button from "@components/Button";
import ListMeal from "@components/ListMeal";
import PercentageCard from "@components/PercentageCard";
import { formatDate } from "@utils/formatDate";
import React, { useState } from "react";
import { Image, SectionList } from "react-native";
import { MealsProps } from "src/@types/types";
import { Container, Header, Meals, SubtitleHome, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";
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

  const navigation = useNavigation();

  function handleStatistics() {
    navigation.navigate("statistics");
  }

  function handleNewSnack() {
    navigation.navigate("newSnack");
  }

  function handleSnack(){
    navigation.navigate("snack");
  }
  return (
    <Container>
      <Header>
        <Image source={Logo} />
        <Image source={Avatar} />
      </Header>

      <PercentageCard percentage={80.86} onOpenStatistics={handleStatistics} />

      <Meals>
        <SubtitleHome>Refeições</SubtitleHome>
        <Button onPress={handleNewSnack} title="Nova refeição" iconName="add" />

        <SectionList
          style={{ marginTop: 32 }}
          sections={mealsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListMeal
              onPress={handleSnack}
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
