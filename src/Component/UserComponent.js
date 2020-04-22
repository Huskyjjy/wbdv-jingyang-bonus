import React from 'react';
import UserService from '../Service/UserService';
class UserComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nuids:[]
        }
        this.UserService = new UserService();
    }
    componentDidMount = async () => {
        const currnuids = await this.UserService.findAllNuids()
        this.setState({
            nuids: currnuids
        })
    }
    render(){
        return(
            <div>
            <h1>Users</h1>
            <ul className="list-group">
                {console.log(this.state.nuids)}
                {this.state.nuids && this.state.nuids.map((nuid,index) => 
                    <li className="list-group-item"
                        key={index}
                        onClick={()=>this.props.history.push(`/wam/nuids/${nuid}/domains`)}>
                        {nuid}
                    </li>)}
            </ul>
            </div>
        )
    }
}
export default UserComponent