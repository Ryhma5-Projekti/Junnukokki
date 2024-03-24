import { getData, storeData, removeData, generateSHA256, getAllKeys, removeAllKeys } from '../LocalStorageUtil';

const key = 'test_key', value = 'test_value';

beforeEach(async () => {
    await storeData(key, value);
})

afterEach(async () => {
    await removeAllKeys();
    jest.restoreAllMocks();
});

describe('storeData', () => {
    it('should be able to store data', async () => {
        await storeData(key, value);
        const result = await getData(key);
        expect(result).toBe(value);
    });

    it('should not throw when object is stored', async () => {
        const obj = {};
        await expect(storeData(key, obj)).resolves.not.toThrow();
    });
});

describe('getData', () => {
    it('should return null if key does not exist', async () => {
        const result = await getData('nonexistent_key');
        expect(result).toBeNull();
    });

    it('should return stored data if key exists', async () => {
        const result = await getData(key);
        expect(result).toBe(value);
    });

    it('should not throw when object is stored', async () => {
        const obj = {};
        await storeData(key, obj)
        await expect(getData(key)).resolves.not.toThrow();
    });

    it('should return the object', async () => {
        const obj = { key: "value" };
        await storeData(key, obj)
        await expect(getData(key)).resolves.toStrictEqual(obj);
    });
});

describe('removeData', () => {
    it('should remove data from AsyncStorage', async () => {
        await removeData(key);
        const result = await getData(key);
        expect(result).toBeNull();
    });
});

describe('generateSHA256', () => {
    it('should generate a SHA-256 hash', () => {
        const obj = { key: 'value' };
        const hash = generateSHA256(obj);
        expect(hash).toBeDefined();
        expect(hash.length).toBe(64); // SHA-256 hash length is 64 characters
    });

    it('should return the same hash for the same input', () => {
        const obj1 = { key: 'value' };
        const obj2 = { key: 'value' };
        const hash1 = generateSHA256(obj1);
        const hash2 = generateSHA256(obj2);
        expect(hash1).toBe(hash2);
    });
});

describe('getAllKeys', () => {
    it('should return an array of keys', async () => {
        await storeData('key1', 'value1');
        await storeData('key2', 'value2');

        const keys = await getAllKeys();
        expect(keys).toContain('key1');
        expect(keys).toContain('key2');

        // Clean up
        await removeAllKeys();
    });

    it('should return an empty array if no keys exist', async () => {
        await removeAllKeys();
        const keys = await getAllKeys();
        expect(keys).toEqual([]);
    });
});

describe('removeAllKeys', () => {
    it('should remove all keys from AsyncStorage', async () => {
        await storeData('key1', 'value1');
        await storeData('key2', 'value2');

        await removeAllKeys();

        const keys = await getAllKeys();
        expect(keys).toEqual([]);
    });
});
