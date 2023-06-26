import React, { useState } from "react";
import { Container } from "./styles";
import FeedbackScreen from "@components/FeedbackScreen/";
import { Text } from "react-native";
import { Strong } from "@components/FeedbackScreen/styles";

export default function FeedbackCreate() {
  const [isInsideDiet, setIsInsideDiet] = useState(true);

  return (
    <Container>
      {isInsideDiet ? (
        <FeedbackScreen
          title="Continue assim!"
          subTitle={<Text>Você continua <Strong>dentro da dieta</Strong>. Muito bem!</Text>}
          insideDiet={isInsideDiet}
        />
      ) : (
        <>
          <FeedbackScreen
            title="Que pena!"
            subTitle={<Text>Você <Strong>saiu da dieta</Strong> dessa vez, mas continue se esforçando e não desista!</Text>}
            insideDiet={isInsideDiet}
          />
        </>
      )}
    </Container>
  );
}
