import { GET,PUT,DELETE, POST, PATCH } from "../fetch";
const root = "leader"

 export default {
    getInfo :async function(id,token){
        try {
            let response = await GET(`/${root}/get-info/${id}`,token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    },
    
     updateInfo : async function(id,updateData,token){
        try {
            let response = await PUT(`/${root}/update-info/${id}`,updateData,token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    },
    
     deleteInfo: async function(id,token){
        try {
            let response = await DELETE(`/${root}/${id}`,token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    },

    insertRaw : async function(id,rawId,token){
        try {
            let response = await PATCH(`/${root}/insert-raw/${id}/${rawId}`,token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    },

    removeRaw : async function(id,rawId,token){
        try {
            let response = await PATCH(`${root}/remove-raw/${id}/${rawId}`,token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    },

    chageRaw : async function(id,token){
        try {
            let response = await PUT(`/${root}/get-raw/${id}`,token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    }
 }
