function MainHeader(){
    return(
        <h1 className='heading1'>React Course</h1>
    )
}

function SubHeader(){
    return (<p style={subHeaderStyle}>This will be an exsiting course.</p>)
}

const subHeaderStyle = {
    color:"blueviolet",
    backgroundColor: "lightgray",
};

export default function Header()
{
    return(
        <div>
            <MainHeader/>
            <SubHeader/>
        </div>
    )
}

//export default Header;