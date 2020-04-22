import React from 'react';
import TopicService from '../Service/TopicService';
import SchemaComponent from './SchemaComponent';

class TopicComponent extends React.Component{
    constructor(props){
        super(props);
        this.TopicService = new TopicService();
    }
    state={
        topics:[],
        nuid:this.props.match.params.nuid,
        domainname:this.props.match.params.domainname,
        topic:{}
    }
    componentDidMount = async () => {
        const ts = await this.TopicService.findTopicsForDomain(this.state.nuid, this.state.domainname)
        this.setState({
            topics:ts
        })
        console.log(this.state.topics)
    }
    render(){
        return(
            <div>
            <h1>
                {this.state.domainname}
            </h1>
            <button className="btn btn-dark"
                onClick={()=>this.props.history.push(`/wam/nuids/${this.state.nuid}/domains`)}>
                Back
            </button>
{/*             <ul className="list-group">
                {this.state.topics.map((topic,index) => 
                    <SchemaComponent
                        nuid={this.state.nuid}
                        domain={this.state.domainname}
                        id={topic._id}
                        key={index}/>)}
                <button className="btn btn-primary"
                    onClick={()=>{
                        this.TopicService.createTopic(this.state.nuid,this.state.domainname,this.state.topic)
                            .then(window.location.reload(false))
                    }}>
                    Add {this.state.domainname}
                </button>
            </ul> */}
            </div>
        )
    }
}
export default TopicComponent