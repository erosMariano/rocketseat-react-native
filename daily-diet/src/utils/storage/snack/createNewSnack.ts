import { SnackProps } from "src/@types/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllSnack } from "./getAllSnack";
import { SNACK_COLLECTION } from "../storageConfig";
import { formatDate } from "@utils/formatDate";

export async function createNewSnack(newStack: SnackProps) {
  try {
    const storedSnack = await getAllSnack();
    const titleNewStack = String(newStack.title);
    const titleNewStackDate = formatDate(titleNewStack);

    let newData = {
      data: [
        {
          description: "",
          foodName: "",
          hour: "",
          id: "",
          insideDiet: false,
        },
      ],
    };

    if (storedSnack.length >= 1) {
      storedSnack.map((el) => {
        const elementStackDate = formatDate(String(el.title));

        if (elementStackDate === titleNewStackDate) {
          const dataElement = {
            id: newStack.data[0].id,
            description: newStack.data[0].description,
            foodName: newStack.data[0].foodName,
            insideDiet: newStack.data[0].insideDiet,
            hour: newStack.data[0].hour,
          };

          el.data.push(dataElement);
          newData = el;
        }
      });
    }

    const newStoredSnack = storedSnack.map((el) =>
      formatDate(String(el.title)) === titleNewStack ? newData : el
    );

    if (newData.data.length >= 2) {
      const storage = JSON.stringify(newStoredSnack);
      await AsyncStorage.setItem(SNACK_COLLECTION, storage);
    } else {
      const storage = JSON.stringify([...storedSnack, newStack]);
      await AsyncStorage.setItem(SNACK_COLLECTION, storage);
    }

  } catch (error) {}
}
