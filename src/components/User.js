const User = (props) =>{
    // const {name} = props
    return (
        <div className="user-card">
            <h1>This is a functional component</h1>
            <h1>{props.name}</h1>
        </div>
    )
}
export default User