import React from 'react';
import DomainServie from '../Service/DomainService'

class DomainComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            domains:[],
            nuid:this.props.match.params.nuid,
            currdomain: ""
            
        }
        this.DomainServie = new DomainServie();
    }
    componentDidMount = async () => {
        const ds = await this.DomainServie.findDomainsForUser(this.state.nuid)
        this.setState({
            domains:ds
        })
    }
    render(){
        return(
            <ul className="list-group">
                {console.log(this.state.domains)}
                {console.log(this.state.nuid)}
                {this.state.domains.map((domain,index) => 
                    <li className="list-group-item"
                        key={index}
                        onClick={()=>this.props.history.push(`/wam/nuids/${this.state.nuid}/domains/${domain}`)}
                        nuid={this.state.nuid}
                        domain={domain}>
                        {domain}
                    </li>)}
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
        )
    }
}
export default DomainComponent