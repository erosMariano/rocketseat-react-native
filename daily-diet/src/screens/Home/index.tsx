import Avatar from "@assets/avatar.png";
import Logo from "@assets/logo.png";
import Button from "@components/Button";
import ListMeal from "@components/ListMeal";
import PercentageCard from "@components/PercentageCard";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { formatDate } from "@utils/formatDate";
import { getAllSnack } from "@utils/storage/snack/getAllSnack";
import React, { useCallback, useEffect, useState } from "react";
import { Image, SectionList } from "react-native";
import { MealsProps, SnackProps } from "src/@types/types";
import { Container, Header, Meals, SubtitleHome, Title } from "./styles";
export default function Home() {
  const [mealsData, setMealsData] = useState<SnackProps[]>([
    {
      title: new Date(),
      data: [
        {
          description: "teste teste",
          foodName: "Teste",
          hour: "1212",
          id: "76b047e9-22c5-400d-a3b7-c14532d0297b",
          insideDiet: false,
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

  function handleSnack() {
    navigation.navigate("snack");
  }

  async function fetchSnacks() {
    try {
      const data = await getAllSnack();
      setMealsData(data);
    } catch (error) {
      console.log(error);
    }
  }
  useFocusEffect(
    useCallback(() => {
      fetchSnacks();
    }, [])
  );

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
              status={item.insideDiet}
            />
          )}
          renderSectionHeader={({ section: { title } }) => {
            return <Title>{formatDate(String(title))}</Title>;
          }}
        />
      </Meals>
    </Container>
  );
}
