import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import StudentRandom from "./StudentRandom";
import StudentsAll from "./StudentsAll";


function App() {
  
  return (
    <BrowserRouter>
      < Routes>
        <Route path="/" element={<StudentRandom />}/>
        <Route path="/all" element={<StudentsAll />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;