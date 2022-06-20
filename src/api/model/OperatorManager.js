import { GET,POST } from "../fetch";
const root = "operator-manager"

 export default {
    searchOperator : async function(searchText,token){
        try {
            let response = await GET(`/${root}/search-operator/${searchText}`,token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    },
    
     totalOperator : async function(token){
        try {
            let response = await GET(`/${root}/total-operator`,token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    },
    
     operatorWithRange : async function(skip,limit,token){
        try {
            let body ={skip,limit}
            let response = await POST(`/${root}/operator-with-range`,body,token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    } 
     
 }


