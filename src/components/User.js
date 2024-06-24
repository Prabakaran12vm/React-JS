import { useState } from "react"
import UserClass from "./UserClass"
const User = (props) =>{
    // const {name} = props
    const count = 0
    const {name} = props
    return (
        <div className="user-card">
            <h1>This is a functional component</h1>
            <h1>{name}</h1>
            <h1>{count}</h1>
            

        </div>
    )
}
export default User