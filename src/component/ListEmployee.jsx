import { Component } from "react";
import EmployeeService from "../service/EmployeeService";

class ListEmployee extends Component {

    constructor(props) {
        super(props)
        this.state = {
            employees: [],
            message:null
        }

        this.addEmployee = this.addEmployee.bind(this)
        this.deleteEmployeeById = this.deleteEmployeeById.bind(this)
        this.refreshAllEmployees = this.refreshAllEmployees.bind(this)

    }

deleteEmployeeById(id){
    EmployeeService.deleteEmployee(id).then(res=> {
       // this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        this.setState({ message: `Delete of Employee ${id} Successful` });

        this.refreshAllEmployees()
    })
}

addEmployee(employee){
    this.props.history.push(`/employee`);
}


    componentDidMount() {
        this.refreshAllEmployees();
        /* EmployeeService.getEmployees().then(res => {
            this.setState({ employees: res.data })
        }) */
    }

    refreshAllEmployees() {
       EmployeeService.getEmployees().then(res => {
            this.setState({ employees: res.data })
        })
    }



    render() {
        return (
            <div>
                <h2 className="text-center">
                    Employee Details
                </h2>
                <div className="row">
                    <button className="btn btn-primary" on onClick={this.addEmployee}>Add Employee</button>

                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thread>
                            <tr>
                                <th>ID </th>
                                <th>Name </th>
                                <th>Email </th>
                                <th>Dob </th>
                                <th>Title </th>
                                <th>Department </th>
                            </tr>
                        </thread>
                        <body>
                            {
                                this.state.employees.map(
                                    employees =>
                                        <tr key={employees.id}>
                                            <td> {employees.name} </td>
                                            <td> {employees.email} </td>
                                            <td> {employees.dob} </td>
                                            <td> {employees.title} </td>
                                            <td> {employees.deptName} </td>
                                            <td>
                                                <button className="btn btn-warning" onClick={() =>this.deleteEmployeeById(employees.id)}> Delete </button>  
                                                    
                                                    </td>
                                        </tr>
                                )
                            }
                        </body>
                    </table>
                </div>
            </div>

        )
    }

}

export default ListEmployee;

