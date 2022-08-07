import { GET,PUT,DELETE,PATCH } from "../fetch";
const root = "assign"

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
    
     delete: async function(id,token){
        try {
            let response = await DELETE(`/${root}/${id}`,token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    },

    doneAssign:async function(id,token){
        try {
            let response = await PATCH(`/${root}/done-assign/${id}`,token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    },

    unDoneAssign:async function(id,token){
        try {
            let response = await PATCH(`/${root}/undone-assign/${id}`,token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    }
}