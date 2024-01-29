import axios from 'axios'
const CUSTOMERDET_API_BASE_URL = ("http://localhost:8080/api/customer/")

class CustomerdetService {
    getCustomersdet(id) {
        return axios.get(CUSTOMERDET_API_BASE_URL + id)
    }
}
export default new CustomerdetService()