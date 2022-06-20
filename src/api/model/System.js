import { GET,POST,DELETE,PATCH } from "../fetch";
const root = "system"

export default {
    createWarehouse:async function(token){
        try {
            let response = await POST(`/${root}/create-warehouse`,token)
            return response 
        } catch (error) {
            throw new Error(error)
        }
    },

    getWarehouses:async function(token){
        try {
            let response = await GET(`/${root}/get-warehouses`,token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    },

    createCbProduction:async function(){
        try {
            let response  = await POST(`/${root}/create-cbproduction`,token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    },

    getCbProduction:async function(){
        try {
            let response = await POST(`/${root}/get-cbproductions`,token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    }
}