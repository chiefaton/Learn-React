import Student from "./Components/Student/student";
import StudentReview from "./Components/Student/StudentReview";
import React from "react";
class MainBody extends React.Component {
  render() {
    const whatWeWillLearn = "React JS";
    const lectureCount = 3;
    return (
      <div style={{ minHeight: "70vh" }}>
        <p>
          In this course, we will learn {whatWeWillLearn} by building
          TaskOPedia!
        </p>
        <p>Topics covered in this lesson {lectureCount}</p>
        <ul>
          <li>Basic foundation</li>
          <li>Functional and class Components</li>
        </ul>
        {/* <div>
          Enter Task: <input maxLength={20} readOnly={false} placeholder="Ben"></input>
      </div> */}
        <div className="container row">Students Enrolled</div>
        <Student name="Devasri" experience={2}>
          <StudentReview />
        </Student>
        <Student name="Mani" experience={3}>
          <StudentReview />
        </Student>
        <Student name="Vinoth" experience={8} />
        <Student name="Mohan" experience={4} />
      </div>
    );
  }
}

export default MainBody;
