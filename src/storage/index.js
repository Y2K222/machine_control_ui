import Promise from "core-js-pure/features/promise";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default {
    /**
     *  Using react-native-async-storage libary
     *  libiary functions are async functions
     */

    /**
     *  Get data from storage with stored key
     *  params(key:string)
     */
    getFromStorage(key) {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(key)
                .then((result) => {
                    result ? resolve(result) : resolve(false);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },

    removeFromStorage(key) {
        return new Promise((resolve, reject) => {
            AsyncStorage.removeItem(key)
                .then(() => {
                    resolve();
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },

    /**
     *  Set data to storage with key
     *  params(key:string, val:string)
     */
    setToStorage(key, val) {
        return new Promise((resolve, reject) => {
            AsyncStorage.setItem(key, val)
                .then(() => {
                    resolve();
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },

    /**
     *  Set json data to storage with key
     *  params(key:string, val:Object)
     */
    setJsonToStorage(key, val) {
        return new Promise((resolve, reject) => {
            // Checking requested val is Object
            var stringVal;
            try {
                stringVal = JSON.stringify(val);
            } catch (err) {
                reject(err);
            }

            // Store to storage
            AsyncStorage.setItem(key, stringVal)
                .then(() => {
                    resolve();
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
};
