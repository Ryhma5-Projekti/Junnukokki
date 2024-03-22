import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * 
 * @throws Error related to AsyncStorage
 */
const storeData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        throw e
    }
};

/**
 * 
 * @throws Error related to AsyncStorage
 */
const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        throw e
    }
};

export { storeData, getData }