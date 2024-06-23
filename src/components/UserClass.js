import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        return (
            <div className="userclass-card">
                <h1>This is class based component</h1>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}
export default UserClass