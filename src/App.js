// import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage'
import SearchBar from './components/SearchBar';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <div className='App'>
      <h1> Employee App </h1>
      <HomePage />
      <SearchBar />
      <EmployeeList />
    </div>
  );
}

export default App;
