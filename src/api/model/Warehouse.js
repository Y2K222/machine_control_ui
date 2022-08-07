import { GET, PUT, DELETE, POST } from "../fetch";
const root = "warehouse"

export default {

    getInfo: async function (id, token) {
        try {
            let response = await GET(`/${root}/get-info/${id}`, token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    },

    updateInfo: async function (id, updateData, token) {
        try {
            let response = await PUT(`/${root}/update-info/${id}`, updateData, token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    },

    delete: async function (id, token) {
        try {
            let response = await DELETE(`/${root}/${id}`, token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    },

    createNewStock: async function (id, stock, token) {
        try {
            let response = await POST(`/${root}/create-new-stock/${id}`, stock, token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    },

    getStock: async function (id, token) {
        console.log(id)
        try {
            let response = await GET(`/${root}/get-stock/${id}`, token)
            return response
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    },

    stockIn: async function (warehouseId, stockId, amount, token) {
        let body = { amount }
        try {
            let response = await PUT(`/${root}/stock-in/${warehouseId}/${stockId}`, body, token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    },

    stockOut: async function (warehouseId, stockId, amount, token) {
        let body = { amount }
        try {
            let response = await PUT(`/${root}/stock-out/${warehouseId}/${stockId}`, body, token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    }

}