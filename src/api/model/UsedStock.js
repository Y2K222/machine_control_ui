import { DELETE, GET } from "../fetch";
const root = "used-stock"

export default {
    getInfo:async function(id,token){
        try {
            let response = await GET(`/${root}/get-info/${id}`,token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    },
    
    delete : async function(id,token){
        try {
            let response = await DELETE(`${root}/${id}`,token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    }
}