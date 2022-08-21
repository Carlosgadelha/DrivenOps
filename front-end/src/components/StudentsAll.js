/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";

function StudentsAll() {
  const [students, setStudents] = useState(null);
    
  useEffect(async () => {
    const API_URL = process.env.REACT_APP_BASE_URL;
    try {
      const response = await axios.get(`${API_URL}/students`);
      const students = response.data;
      if(!students){
        alert("Putz! Não há estudantes cadastrados para o sorteio!");
      } else {
        setStudents(students);
      }
    } catch (error) {
      alert("Não foi possível realizar o sorteio!");
    }
  }, []);
  
  return (
    students ? students.map( student => 
      { return <h1>{student.name}</h1>}
    ) : "Carregando..."
  )
}

export default StudentsAll;