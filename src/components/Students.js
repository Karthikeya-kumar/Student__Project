import StudentDetails from "./StudentDetails";
import "./Students.css";

function Students(props) {
  return (
    <div clsssName="Students">
      {props.Students.map((renderStudent) => (
        <StudentDetails
          studentId={renderStudent.studentId}
          name={renderStudent.name}
          age={renderStudent.age}
        />
      ))}
      {/* <StudentDetails
        studentId={props.Students[0].studentId}
        name={props.Students[0].name}
        age={props.Students[0].age}
      />
      <StudentDetails
        studentId={props.Students[1].studentId}
        name={props.Students[1].name}
        age={props.Students[1].age}
      />
      <StudentDetails
        studentId={props.Students[2].studentId}
        name={props.Students[2].name}
        age={props.Students[2].age}
      /> */}
    </div>
  );
}

export default Students;
