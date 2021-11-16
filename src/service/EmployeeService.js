import axios from 'axios';

const Emp_API_URI = 'http://localhost:8080/employees';

class EmployeeService {

    getEmployees() {
        return axios.get(Emp_API_URI);
    }

    deleteEmployee(id) {
        //return axios.delete(`${Emp_API_URI}/employee/remove/${id}`);
        // return axios.delete(Emp_API_URI + '/employee/remove' + `/${id}`);
        return axios.delete(Emp_API_URI + '/employee/remove/' + id);
    }

    createEmployee(employee) {
        return axios.post(Emp_API_URI + '/employee');
    }

}

export default new EmployeeService();