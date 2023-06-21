import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import Student from './student';
const root = ReactDOM.createRoot(document.getElementById('root'));



function Footer(){
    return(
        <p style={{ color:"gray", backgroundColor:"black" }}>Happy Coding!!!</p>
    )
}
function MainBody(){
    let whatWeWillLearn = "React JS";
    const Topics = 3;
    return(
        <div>
    <p>In this course, we will learn {whatWeWillLearn} by building TaskOPedia!</p>
    <p>Topics covered in this lesson {Topics}</p>
    <ul>
        <li>Basic foundation</li>
        <li>Functional and class Components</li>
    </ul>
    {/* <div>
        Enter Task: <input maxLength={20} readOnly={false} placeholder="Ben"></input>
    </div> */}
</div>
    )
}
root.render(
<div className="container">
    <Header/>
    <MainBody/>
    <div className="row">Students Enrolled</div>
    <Student name="Devasri" experience = {2}/>
    <Student name="Mani" experience = {3}/>
    <Student name="Vinoth" experience = {8}/>
    <Student name="Mohan" experience = {4}/>
    <Footer/>

</div>
);
