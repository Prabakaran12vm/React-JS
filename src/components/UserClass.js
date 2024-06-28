import React from "react";
import User from "./User";
import { GIT_URL } from "../utils/constants";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserInfo:{
        

      }
      
    };
    // console.log("constructor")
  }
  async componentDidMount(){
    const data = await fetch(GIT_URL)
    const json = await data.json()
    // console.log(json)
    this.setState({

      UserInfo: json

  });


  };
  

  render() {
    // destructuring in class based component
    const { name } = this.props;

    const{company,avatar_url} = this.state.UserInfo;
    
    console.log("render")
    return (
      <div className="userclass-card">
        <h1>This is class based component</h1>
        <h1>{name}</h1>
        <h2>{company}</h2>
        {console.log(this.state.UserInfo)}
        <img className="profile-dp" alt="DP" src={avatar_url}></img>
      </div>
    );
  }
}
export default UserClass;
