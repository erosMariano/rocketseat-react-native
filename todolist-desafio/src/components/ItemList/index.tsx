import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import { styles } from "./styles";
import { useState } from "react";

interface ItemListProps {
  content: string;
  onRemove: () => void;
}
export default function ItemList({ content,onRemove }: ItemListProps) {
  const [itemChecked, setItemChecked] = useState(false);

  function handleCheckedItem() {
    setItemChecked((prevState) => !prevState);
  }
  const textDecorationLine = itemChecked ? styles.teste : styles.removeLine;
  return (
    <TouchableOpacity style={styles.container} onPress={handleCheckedItem}>
      <Checkbox value={itemChecked} style={styles.checkbox} color={"#5E60CE"} />
      <Text style={[styles.text, textDecorationLine]}>{content}</Text>
      <TouchableOpacity onPress={onRemove}>
        <Image
          style={styles.image}
          source={require("../../images/icons/trash.png")}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
