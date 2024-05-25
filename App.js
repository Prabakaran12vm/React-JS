import React from "react"
import ReactDOM  from "react-dom/client"

// const heading  = React.createElement(
//     "h1",
//     {id:"headding"},
//     "Namaste React"
// );

const Title = ()=>(<h1 className="head" tabIndex={"5"}> Component Composition</h1>)    
const name = null

const HeadingComponent  = ()=>(
    <div>
        <Title/>
        {/* {Title} */}
        <h1>
            This is Insane
        </h1>
        </div>
)
// console.log(dummy)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>)
// root.render(heading);