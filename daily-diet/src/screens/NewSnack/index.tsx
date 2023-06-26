import Button from "@components/Button";
import Header from "@components/Header";
import { useNavigation } from "@react-navigation/native";
import { formatDateNewStack } from "@utils/formatDate";
import { formatHourNewStack } from "@utils/formatHourNewStack";
import Circle from "phosphor-react-native/src/icons/Circle";
import React, { useState } from "react";
import { useTheme } from "styled-components";
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

export default function NewSnack() {
  const { COLORS } = useTheme();
  const navigation = useNavigation()
  
  const [selectedInsideDiet, setSelectedInsideDiet] = useState(false);
  const [infoForm, setInfoForm] = useState({
    name: "",
    description: "",
    date: "",
    hour: "",
    insideDiet: false,
  });

  function handleSelectInsideDiet(value: boolean) {
    setSelectedInsideDiet(value);
  }

  function handleSubmitCadasterDiet() {
    navigation.navigate("feedbackCreate")
  }

  return (
    <Container>
      <Header title="Nova refeição" />

      <Content>
        <TitleInput>Nome</TitleInput>
        <Input
          onChangeText={(text) => setInfoForm({ ...infoForm, name: text })}
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
            setInfoForm({ ...infoForm, description: text })
          }
        />

        <InfoContainer>
          <DetailsInfo>
            <TitleInput>Data</TitleInput>
            <Input
              value={formatDateNewStack(infoForm.date)}
              keyboardType="numeric"
              maxLength={10}
              onChangeText={(text) => setInfoForm({ ...infoForm, date: text })}
            />
          </DetailsInfo>

          <DetailsInfo>
            <TitleInput>Hora</TitleInput>
            <Input
              maxLength={5}
              value={formatHourNewStack(infoForm.hour)}
              keyboardType="numeric"
              onChangeText={(text) => setInfoForm({ ...infoForm, hour: text })}
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
