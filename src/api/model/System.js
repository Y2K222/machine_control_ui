import { GET, POST, DELETE, PATCH } from "../fetch";
const root = "system"

export default {
    createWarehouse: async function (warehouse, token) {
        try {
            let response = await POST(`/${root}/create-warehouse`, warehouse, token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    },

    getWarehouses: async function (token) {
        try {
            let response = await GET(`/${root}/get-warehouses`, token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    },

    createCbProduction: async function (token) {
        try {
            let response = await POST(`/${root}/create-cbproduction`, token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    },

    getCbProduction: async function (token) {
        try {
            let response = await GET(`/${root}/get-cbproductions`, token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    }
}