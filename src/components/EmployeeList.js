function EmployeeListItems(){
    return (
        <div>
            <ul>
                <li> Eomplyee #1 </li>
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