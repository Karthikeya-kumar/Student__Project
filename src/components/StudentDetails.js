import React from 'react'; 


import './StudentDetails.css';





const StudentDetails = (props) => {

  
    


    return (
    <div className="StudentDetails">
      
        <div className='StudentDetails__id'>{props.studentId}</div>
       <div className="StudentDetails__description">
         <h2>{props.name}</h2>
       </div>
      <div className="StudentDetails__age">{props.age}</div>
      
    </div>
    );
}

export default StudentDetails;