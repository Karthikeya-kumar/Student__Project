import React, { useState} from "react";

import NewStudent from "./components/U-I/NewStudent";
import Students from "./components/Students";

const Initial_Students = [
  {
    id: 0,
    studentId: 1482,
    name: "Radhika",
    age: 16,
  },
  {
    id: 1,
    studentId: 1483,
    name: "Tanish",
    age: 15,
  },
  {
    id: 2,
    studentId: 1484,
    name: "Jack",
    age: 18,
  },
];

const App = () => {
  const [students, setStudent] = useState(Initial_Students);
  

  
  
  const addSutdentHandler= student => {
    setStudent([student, ...students]);   
  };

  return (
    <div>
      
      <NewStudent onAddStudent={addSutdentHandler} />

      <Students Students={students}></Students>
    </div>
  );
}

export default App;
