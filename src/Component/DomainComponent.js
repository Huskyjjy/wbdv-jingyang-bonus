import React from 'react';
import DomainServie from '../Service/DomainService'

class DomainComponent extends React.Component{
    constructor(props){
        super(props);
        this.DomainServie = new DomainServie();
    }
    state={
        domains:[],
        nuid:this.props.match.params.nuid,
        currdomain: "",
        editing: false
        
    }
    componentDidMount = async () => {
        const ds = await this.DomainServie.findDomainsForUser(this.state.nuid)
        this.setState({
            domains:ds
        })
    }
    render(){
        return(
            <div>
            <h1>
                Domains for {this.state.nuid}
            </h1>
            <button className="btn btn-dark"
                onClick={()=>this.props.history.push(`/wam/nuids`)}>
                Back
            </button>
            <ul className="list-group">
                {this.state.domains.map((domain,index) => 
                    <li className="list-group-item"
                        key={index}
                        nuid={this.state.nuid}
                        domain={domain}>
                        <div className="row">
                            <div className="col-8"
                                onClick={()=>this.props.history.push(`/wam/nuids/${this.state.nuid}/domains/${domain}`)}
                        >
                                {domain}
                            </div>
                            <div className="col-4">
                            <button className="btn btn-warning"
                                onClick={()=>{
                                    this.setState({editing:true})
                                }}>
                                Edit
                            </button>
                            </div>
                        </div>
                    </li>
                )}
                <div>
                <div className="inline">    
                <input className="form-control"
                    id="domainname"
                    placeholder="New"
                    value={this.state.currdomain}
                    onChange={(e)=>
                        this.setState({
                            currdomain:e.target.value
                        })
                    }
                />
                </div>
                <div className="inline">
                <button className="btn btn-primary"
                    onClick={()=>{
                        this.props.history.push(`/wam/nuids/${this.state.nuid}/domains/${this.state.currdomain}`)
                    }}>
                    Add Domain
                </button>
                </div>
                </div>
            </ul>
            </div>
        )
    }
}
export default DomainComponent