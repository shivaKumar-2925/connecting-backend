import './App.css';
import {Routes,Route} from 'react-router-dom';
import GetStudentData from './StudentDataFold/GetStudentData';
import UiniqStudentData from './StudentDataFold/UiniqStudentData';
import AddStudent from './StudentDataFold/AddStudent';
function App() {
  return (
    
   <div>
     
  <Routes>
    <Route path="/" element={<GetStudentData/>} />
    <Route path="/student" element={<UiniqStudentData/>} />
    <Route path="/update" element={<AddStudent/>} />

  </Routes>
   </div>
  );
}

export default App;
