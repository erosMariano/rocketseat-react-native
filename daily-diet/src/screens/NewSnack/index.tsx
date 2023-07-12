import Button from "@components/Button";
import Header from "@components/Header";
import { useNavigation } from "@react-navigation/native";
import { formatDateNewStack } from "@utils/formatDate";
import { formatHourNewStack } from "@utils/formatHourNewStack";
import Circle from "phosphor-react-native/src/icons/Circle";
import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import uuid from "react-native-uuid";

import {
  ButtonDiet,
  Container,
  ContainerButtons,
  Content,
  DetailsInfo,
  InfoContainer,
  Input,
  RowContainerButtons,
  TitleInput,
} from "./styles";
import { createNewSnack } from "@utils/storage/snack/createNewSnack";
import { SnackProps } from "src/@types/types";

export default function NewSnack() {
  const { COLORS } = useTheme();
  const navigation = useNavigation();

  const [selectedInsideDiet, setSelectedInsideDiet] = useState(false);
  const [dateFormatted, setDate] = useState("");
  const [timeFormatted, setTimeFormatted] = useState("");

  const [infoForm, setInfoForm] = useState<SnackProps>({
    title: new Date(),
    data: [
      {
        id: String(uuid.v4()),
        foodName: "",
        description: "",
        hour: "",
        insideDiet: false,
      },
    ],
  });

  function handleSelectInsideDiet(value: boolean) {
    setSelectedInsideDiet(value);

    setInfoForm((prevState) => {
      const updateData = [...prevState.data];
      updateData[0].insideDiet = value;
      return {
        ...prevState,
        data: updateData,
      };
    });
  }

  const handleInputChange = (text: string) => {
    const formattedDate = formatDateNewStack(text);
    setDate(formattedDate);

    const day = Number(formattedDate.replaceAll("/", "-").split("-")[0]);
    const month = Number(formattedDate.replaceAll("/", "-").split("-")[1]) - 1;
    const year = Number(formattedDate.replaceAll("/", "-").split("-")[2]);

    setInfoForm((prevState) => ({
      ...prevState,
      title: new Date(year, month, day),
    }));
  };

  const handleTimeChange = (text: string) => {
    const formattedHour = formatHourNewStack(text);
    setTimeFormatted(formattedHour);

    setInfoForm((prevState) => {
      const updateData = [...prevState.data];
      updateData[0].hour = formattedHour;

      return {
        ...prevState,
        data: updateData,
      };
    });
  };

  async function handleSubmitCadasterDiet() {
    try {
      const createNewStack = await createNewSnack(infoForm);
      // navigation.navigate("feedbackCreate", {
      //   insideDiet: infoForm.data[0].insideDiet,
      // });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Header title="Nova refeição" />

      <Content>
        <TitleInput>Nome</TitleInput>
        <Input
          onChangeText={(text) =>
            setInfoForm((prevState) => ({
              ...prevState,
              data: [
                {
                  ...prevState.data[0],
                  foodName: text,
                },
              ],
            }))
          }
        />

        <TitleInput>Descrição</TitleInput>
        <Input
          multiline={true}
          numberOfLines={6}
          style={{
            textAlignVertical: "top",
            paddingTop: 16,
          }}
          onChangeText={(text) =>
            setInfoForm((prevState) => ({
              ...prevState,
              data: [
                {
                  ...prevState.data[0],
                  description: text,
                },
              ],
            }))
          }
        />

        <InfoContainer>
          <DetailsInfo>
            <TitleInput>Data</TitleInput>
            <Input
              value={dateFormatted}
              keyboardType="numeric"
              maxLength={10}
              onChangeText={handleInputChange}
            />
          </DetailsInfo>

          <DetailsInfo>
            <TitleInput>Hora</TitleInput>
            <Input
              maxLength={5}
              value={timeFormatted}
              keyboardType="numeric"
              onChangeText={handleTimeChange}
            />
          </DetailsInfo>
        </InfoContainer>

        <ContainerButtons>
          <TitleInput>Está dentro da dieta?</TitleInput>
          <RowContainerButtons>
            <ButtonDiet
              onPress={() => handleSelectInsideDiet(true)}
              active={selectedInsideDiet}
              value="1"
            >
              <TitleInput>
                <Circle
                  color={COLORS.GREEN_DARK}
                  weight="fill"
                  size={8}
                  style={{ marginRight: 8 }}
                />{" "}
                Sim
              </TitleInput>
            </ButtonDiet>
            <ButtonDiet
              onPress={() => handleSelectInsideDiet(false)}
              active={selectedInsideDiet}
              value="0"
            >
              <TitleInput>
                <Circle
                  color={COLORS.RED_DARK}
                  weight="fill"
                  size={8}
                  style={{ marginRight: 8 }}
                />{" "}
                Não
              </TitleInput>
            </ButtonDiet>
          </RowContainerButtons>
        </ContainerButtons>
        <Button title="Cadastrar refeição" onPress={handleSubmitCadasterDiet} />
      </Content>
    </Container>
  );
}
