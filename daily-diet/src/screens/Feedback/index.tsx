import React, { useState } from "react";
import { Container } from "./styles";
import FeedbackScreen from "@components/FeedbackScreen/";
import { Text } from "react-native";
import { Strong } from "@components/FeedbackScreen/styles";
import { useNavigation, useRoute } from "@react-navigation/native";

type RouteParams = {
  insideDiet: boolean;
};
export default function FeedbackCreate() {
  const navigation = useNavigation();
  const route = useRoute();

  const { insideDiet } = route.params as RouteParams;


  return (
    <Container>
      {insideDiet ? (
        <FeedbackScreen
          title="Continue assim!"
          subTitle={
            <Text>
              Você continua <Strong>dentro da dieta</Strong>. Muito bem!
            </Text>
          }
          insideDiet={insideDiet}
        />
      ) : (
        <>
          <FeedbackScreen
            title="Que pena!"
            subTitle={
              <Text>
                Você <Strong>saiu da dieta</Strong> dessa vez, mas continue se
                esforçando e não desista!
              </Text>
            }
            insideDiet={insideDiet}
          />
        </>
      )}
    </Container>
  );
}
