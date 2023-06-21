import {faker} from "@faker-js/faker";

function Student(props){
    //const fullName = props.name;
   // const programmingExp = 2;
    return(
        <div className="container p-4">
            {/* <div className = "row">Students Enrolled</div> */}
            <div className="row border">
                < div className = "col-2">
                    <img src={`https://ui-avatars.com/api/?name=${fullName}`} className="w-100" alt="user profile"></img>
                </div>

                <div className="col-10">
                    {props.name} <br/>
                   Programming Experience {props.experience} years
                </div>
            </div>
        </div>
    )
}


export default Student;