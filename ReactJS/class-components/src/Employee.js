import React, {Component} from "react"

class Employee extends Component
{
    render(){
        return(
            <tr className = 'employeeContainer'>
                <p><center>{this.props.name}</center></p>
                <p><center>{this.props.department}</center></p>
                <p><center>{this.props.salary}</center></p>
            </tr>
        )
    }
}

export default Employee;