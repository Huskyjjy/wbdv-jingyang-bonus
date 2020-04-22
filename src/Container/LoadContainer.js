import React from 'react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import UserComponent from '../Component/UserComponent';
import DomainComponent from '../Component/DomainComponent';
import TopicComponent from '../Component/TopicComponent';
import LandingComponent from '../Component/LandingComponent';

class LoadContainer extends React.Component{
    render(){
        return(
            <Router>
                <Route
                    path="/"
                    exact={true}
                    component={LandingComponent}>
                </Route>
                <Route
                    path="/wam/nuids"
                    exact={true}
                    component={UserComponent}>
                </Route>
                <Route
                    path="/wam/nuids/:nuid/domains"
                    exact={true}
                    component={DomainComponent}>
                </Route>
                <Route
                    path="/wam/nuids/:nuid/domains/:domainname"
                    exact={true}
                    component={TopicComponent}>
                </Route>
            </Router>
        )
    }
}
export default LoadContainer