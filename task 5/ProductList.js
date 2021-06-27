import React from 'react'
import EmployeeDetail from './EmployeeDetail'

function ProductList(props) {

    const empList=[
        {
            id: 1,
            employeeName: "Kalyani",
            age: 20,
            skill: "C"
        },
        {
            id: 2,
            employeeName: "Saranya",
            age: 21,
            skill: "Python"
        },
        {
            id: 3,
            employeeName: "Harika",
            age: 20,
            skill: "React"
        }
    ]

   const productList=['Fridge', 'WashingMachine','Tiles with250MM','Table','Furniture']
   const {id,productName,price,quantity} = props

   

   const employeeList = empList.map(employee =>(
       <EmployeeDetail key={employee.id} empdetail={employee}/>
   ))

    return (
        <div>
            <h1>Product Details</h1>
            <h1>{id} {productName} {quantity} {price}</h1>
            {employeeList}
        </div>
    )
}

export default ProductList

