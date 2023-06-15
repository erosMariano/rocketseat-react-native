import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export default function EmptyList() {
  return (
    <View style={styles.container}>
      <Image source={require("../../images/icons/emptyImage.png")} />
      <Text style={styles.textBold}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.sampleText}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
