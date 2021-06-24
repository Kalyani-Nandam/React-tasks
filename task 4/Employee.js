import React from 'react'


const Employee = (props) => {
  console.log("props data :: ",props);
  return <h1>Employee ID : {props.EmployeeId} <br></br>
             Employee Rollno: {props.Rollno}<br></br>
             Company: {props.Company} <br></br>
             Designation: {props.Designation} <br></br></h1> 
}


export default Employee;
