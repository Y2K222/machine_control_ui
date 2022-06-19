import { POST } from "../fetch";
const root = "stock-record-manager"

export default {
    getRecordWithDateRange:async function(warehouseId,itemId,token){
        try {
            let response = await POST(`/${root}/get-record-with-date/${warehouseId}/${itemId}`,token)
            return response
        } catch (error) {
            throw new Error(error)
        }
            
    }
}