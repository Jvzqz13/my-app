// import logo from './logo.svg';
import './App.css';
import HomePage from './components/homepage/HomePage'
import EmployeePage from './components/emplyeepage/EmployeePage'

function App() {
  return (
    <div className='App'>
      <h1> Employee App </h1>
      <div className='wrapper'>

      <HomePage />
      <EmployeePage />
      
      </div>
    </div>
  );
}

export default App;
