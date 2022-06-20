import { GET } from "../fetch";
const root ="use-stock-manager"

export default {
    getDataWithRange:async function(rawId,cbproductionId){
        try {
            let response = await GET(`/${root}/get-data-with-range/${rawId}/${cbproductionId}`,token)
            return response
        } catch (error) {
            throw new Error(error)
        }
    }
}