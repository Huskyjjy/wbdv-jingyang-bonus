import React from 'react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
class LandingComponent extends React.Component{
    constructor(props){
        super(props);
        this.props=props
    }
    render(){
        return(
            <div>
                <Link to="/wam/nuids">
                    Go to see users
                </Link>
            </div>
        )
    }
}
export default LandingComponent