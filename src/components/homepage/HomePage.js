import EmployeeList from "./EmployeeList";
import Header from "./Header";
import SearchBar from "./SearchBar";

function HomePage (){
    return (
        <div className ='Homepage'>
        <h2> Home Page </h2>
        <Header />
        <SearchBar />
        <EmployeeList />
        </div>
        );
}

export default HomePage;