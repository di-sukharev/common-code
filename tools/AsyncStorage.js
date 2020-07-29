import { AsyncStorage } from "react-native";
import { isNotEmptyObject } from ".";

const AStorage = {
  async set(key, value) {
    const val = await AsyncStorage.setItem(key, value);
    return val;
  },

  async get(key) {
    const val = await AsyncStorage.getItem(key);
    return val;
  },

  async setObject(key, value) {
    const val = await AsyncStorage.setItem(key, JSON.stringify(value));
    return val;
  },

  async getObject(key) {
    const val = await AsyncStorage.getItem(key);

    const obj = JSON.parse(val || "{}");
    return isNotEmptyObject(obj) ? obj : null;
  },

  async clearItem(key) {
    await AsyncStorage.removeItem(key);
  },

  async clearAll() {
    await AsyncStorage.clear();
  }
};

export default AStorage;
