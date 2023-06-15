import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import EmptyList from "../../components/EmptyList";
import ItemList from "../../components/ItemList";

export default function Home() {
  const [itemList, setItemList] = useState<string[]>([]);
  const [itemListTextInput, setItemListTextInput] = useState("");

  function handleAddNewItemList() {
    if (itemList.includes(itemListTextInput)) {
      Alert.alert("Item já existe!");
    }
    setItemList((prevState) => [...prevState, itemListTextInput]);
    setItemListTextInput("")
  }

  function handleRemoveItemList(item: string) {
    Alert.alert("Deletar item", `Deseja remover o item: ${item}`, [
      {
        text: "Sim",
        onPress: () => setItemList(prevState => prevState.filter(itemState => itemState !== item))
      },
      {
        text: "Não",
        style: "cancel"
      },
    ]);
  }
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.containerForm}>
        <View style={styles.form}>
          <TextInput
            value={itemListTextInput}
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={"#808080"}
            onChangeText={(text) => setItemListTextInput(text)}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAddNewItemList}
          >
            <Image source={require("../../images/icons/plus.png")} />
          </TouchableOpacity>
        </View>

        <View style={styles.infosList}>
          <View style={styles.countsContainer}>
            <Text style={styles.textCriadas}>Criadas</Text>
            <Text style={styles.count}>0</Text>
          </View>

          <View style={styles.countsContainer}>
            <Text style={styles.textConcluidas}>Concluídas</Text>
            <Text style={styles.count}>0</Text>
          </View>
        </View>
      </View>

      <View style={styles.containerList}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={itemList}
          renderItem={({ item }) => (
            <ItemList
              onRemove={() => handleRemoveItemList(item)}
              content={item}
            />
          )}
          keyExtractor={(item) => item}
          ListEmptyComponent={<EmptyList />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    gap: 4,
  },
  containerForm: {
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: -23,
  },
  containerList: {
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: 24,
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: "#262626",
    borderRadius: 4,
    fontSize: 16,
    paddingLeft: 16,
    color: "#F2F2F2",
    borderColor: "#0D0D0D",
    borderWidth: 1,
  },
  addButton: {
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
    width: 52,
    height: 52,
    borderRadius: 6,
  },
  infosList: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textCriadas: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4EA8DE",
  },
  textConcluidas: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#8284FA",
  },
  countsContainer: {
    flexDirection: "row",
    gap: 8,
    marginTop: 40,
  },
  count: {
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
    color: "#d9d9d9",
    fontWeight: "bold",
    borderRadius: 10000,
  },
});
