import AsyncStorage from "@react-native-async-storage/async-storage";
import { SNACK_COLLECTION } from "../storageConfig";
import { SnackProps } from "src/@types/types";

export async function getAllSnack() {
  try {
    const storage = await AsyncStorage.getItem(SNACK_COLLECTION);
    const snacks: SnackProps[] = storage ? JSON.parse(storage) : [];
    return snacks;
  } catch (error) {
    throw error;
  }
}
