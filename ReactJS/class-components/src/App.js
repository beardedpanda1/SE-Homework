
import './App.css';
import Hello from './Hello'
import Employee from "./Employee"

function App() {
  return (
    <div className="App">
      <Hello name = "Tom" />
      <Hello name = "Jack" />

      <table>
        <tr>
        <th>Name</th>
        <th>Department</th>
        <th>Salary</th>
        </tr>
        
        <Employee name = "Mark Weins" department = "Public Relations" salary = "$245,000/year"/>
        <Employee name = "Mark Weins" department = "Public Relations" salary = "$245,000/year"/>
        <Employee name = "Mark Weins" department = "Public Relations" salary = "$245,000/year"/>
        
      </table>
    </div>
  );
}

export default App;
