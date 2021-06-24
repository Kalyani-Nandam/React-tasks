import logo from './logo.svg';
import './App.css';
import Employee from './Component/Employee'
function App() {
  return (
    <div className="App">
      <h1>Employee Details</h1>
      <Employee EmployeeId="008" Rollno="17F01A04E8" Company="Hakuna Matata" Designation="June" Rating="5"/>
    </div>
  );
}

export default App;


