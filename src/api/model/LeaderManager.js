import { GET,POST } from "../fetch";
const root = "leader-manager"

 export default {
    searchLeader : async function(searchText,token){
        try {
            let response = await GET(`/${root}/search-leader/${searchText}`,token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    },
    
     totalLeader : async function(token){
        try {
            let response = await GET(`/${root}/total-leader`,token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    },
    
     leaderWithRange : async function(skip,limit,token){
        try {
            let body ={skip,limit}
            let response = await POST(`/${root}/leader-with-range`,body,token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    } 
     
 }


