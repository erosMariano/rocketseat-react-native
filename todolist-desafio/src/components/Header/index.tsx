import { View,  Image } from "react-native";
import React from "react";
import { styles } from "./styles";


export default function Header() {
  return (
    <View style={styles.container}>
      <Image  source={require("../../images/logo.png")} />
    </View>
  );
}

