//eactDOM.render(<p>Hello world from React</p> , document.getElementById("root"));

// ReactDOM.render(
//     <div>
//         <h1>React Course</h1>
//         <p>We will learn react this Course</p>
//         </div>,
//         document.getElementById("root")
// );


//where we want to render

const root =  ReactDOM.createRoot(document.getElementById("root"));

//what we want to render
root.render(
    <div>
        <h1>React Course</h1>
        <p>We will learn react this Course</p>
        </div>,
        document.getElementById("root")
);