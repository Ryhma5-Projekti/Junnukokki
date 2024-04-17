import AsyncStorage from '@react-native-async-storage/async-storage';
import CryptoJS from 'crypto-js';

/**
 * Function to generate SHA-256 hash based on key-value pairs of an object
 * @param {{key: value}} obj Valid JSON-like object
 * @returns {String}
 */
const generateSHA256 = (obj) => {
    return CryptoJS.SHA256(JSON.stringify(obj)).toString(CryptoJS.enc.Hex);
}

/**
 * Get data from AsyncStorage
 * @throws Error related to AsyncStorage
 * @param {String} key Unique identifier
 * @returns {String | null}
 */
const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
        console.error(`Error while getting key: ${key}`)
        throw error
    }
};

/**
 * Store data into AsyncStorage
 * @param {String} key Unique identifier
 * @param {*} value Gets converted with JSON.stringify
 * @throws Error related to AsyncStorage
 */
const storeData = async (key, value) => {
    try {
        console.log("storing: ", key, value)

        await AsyncStorage.setItem(key, JSON.stringify(value));
        await updateKeyList(key);
    } catch (error) {
        console.error(`Error while storing data: '${key}': '${value}'`)
        throw error
    }
};

/**
 * Remove data from AsyncStorage
 * @param {String} key Unique identifier
 * @throws Error related to AsyncStorage
 */
const removeData = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        await updateKeyListOnRemoval(key)
        console.log(`Data associated with key '${key}' removed successfully.`);
    } catch (error) {
        console.error(`Error while removing data with key: '${key}'`);
        throw error
    }
};

/**
 * Remove all keys from storage and keyList
 * @throws Error related to AsyncStorage
 */
const removeAllKeys = async () => {
    try {
        const keyList = await getAllKeys()
        keyList.forEach(key => {
            removeData(key)
        })
        removeData('keyList')
    } catch (error) {
        console.error(`Error while removing keys and key list`);
        throw error
    }
}

/**
 * Function to update the list of keys in AsyncStorage when removing a key
 * @throws Error related to AsyncStorage
 * @param {String} key Unique identifier
 */
const updateKeyListOnRemoval = async (key) => {
    try {
        const keyListJSON = await AsyncStorage.getItem('keyList');
        const keyList = keyListJSON ? JSON.parse(keyListJSON) : [];

        if (keyList.includes(key)) {
            keyList.filter(item => item !== key)
            await AsyncStorage.setItem('keyList', JSON.stringify(keyList));
        } else {
            console.log("Key doesn't exists in key list:", key);
        }
    } catch (error) {
        console.error(`Error while removing key ${key} from key list`);
        throw error
    }
}

/**
 * Function to update the list of keys in AsyncStorage when adding a key
 * @throws Error related to AsyncStorage
 * @param {String} key Unique identifier
 */
const updateKeyList = async (key) => {
    try {
        const keyListJSON = await AsyncStorage.getItem('keyList');
        const keyList = keyListJSON ? JSON.parse(keyListJSON) : [];

        if (!keyList.includes(key)) {
            keyList.push(key);
            await AsyncStorage.setItem('keyList', JSON.stringify(keyList));
        } else {
            console.log("Key already exists:", key);
        }
    } catch (error) {
        console.error(`Error while updating key list with key ${key}`);
        throw error
    }
};

/**
 * Function to retrieve all stored keys from AsyncStorage
 * @throws Error related to AsyncStorage
 * @returns {[String]} List of stored keys
 */
const getAllKeys = async () => {
    try {
        const keyListJSON = await AsyncStorage.getItem('keyList');
        const keyList = keyListJSON ? JSON.parse(keyListJSON) : [];

        return keyList;
    } catch (error) {
        console.error("Error while retrieving key list");
        throw error
    }
};

export { getData, storeData, removeData, generateSHA256, getAllKeys, removeAllKeys }