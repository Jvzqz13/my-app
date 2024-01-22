function EmployeeListItems(){
    return (
        <div>
            <ul>
                <li style = {{listStyleType: "none"}}> Employee #1 </li>
            </ul>
        </div>
    )
}

export default function EmployeeList (){
    return (
        <>
        <EmployeeListItems />
        <EmployeeListItems />
        <EmployeeListItems />
        <EmployeeListItems />
        <EmployeeListItems />
        <EmployeeListItems />
        </>
    )
}