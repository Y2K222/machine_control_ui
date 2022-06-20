import { GET, POST } from "../fetch";
const root = "auth"

export default {
    registerOperator:async function(operator,token){
        try {
            let response = await POST (`/${root}/register-operator`,operator,token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    },
    
    loginOperator :async function(email,password,token){
        try {
            let body = {email,password}
            let response = await POST(`/${root}/login-operator`,body,token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    },

    verifyOperator:async function(token){
        try {
            let response = await GET(`/${root}/verify-operator`,token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    }, 
     registerLeader:async function(leader,token){
        try {
            let response = await POST (`/${root}/register-leader`,leader,token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    },
    
    loginLeader :async function(email,password,token){
        try {
            let body = {email,password}
            let response = await POST(`/${root}/login-leader`,body,token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    },

    verifyLeader:async function(token){
        try {
            let response = await GET(`/${root}/verify-leader`,token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    }

}