import EmployeeInfo from "./EmployeeInfo";
import EmployeePageHeader from "./EmployeePageHeader"

function EmployeePage (){
    return (
        <div className ='EmployeePage'>
            <h2> Employee Page </h2>
            <EmployeePageHeader />
            <EmployeeInfo />


        </div>
    )
}

export default EmployeePage;