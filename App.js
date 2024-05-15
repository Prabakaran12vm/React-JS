const heading  = React.createElement(
    "h1",
    {id:"heading"},
    "Hello React" 

)
const footer = React.createElement(
    "h2",
    {id:"footer"},
    "This is FOOTER"
)

{/* <div id="parent">
<div id="child" >
    <h1></h1>
    <h2></h2>    
</div>

</div> */}
const parent = React.createElement(
"div", 
{id:"parent"}, 
React.createElement(
    "div", 
{id:"child"},
[React.createElement("h1", {}, "This is H1 from child"),
React.createElement("h2", {}, "This is H2 from child")
]))




const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)
root.render(parent)