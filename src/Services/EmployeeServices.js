import axios from "axios";

const EMPLOYEE_BASE_REST_API_URL = 'https://employee-management-sys07.herokuapp.com/employee';

class EmployeeService {
    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL + "/findall")
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_REST_API_URL + "/save", employee)
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_BASE_REST_API_URL + "/findbyid/" + employeeId)
    }

    updateEmployee(employeeId, employee){
        return axios.put(EMPLOYEE_BASE_REST_API_URL + "/update/" + employeeId,employee)
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + "/delete/" + employeeId)
    }
}



export default new EmployeeService();