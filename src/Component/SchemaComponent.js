import React from 'react';
import SchemaService from '../Service/SchemaService'
class SchemaComponent extends React.Component{
    constructor(props){
        super(props);
        this.SchemaService = new SchemaService();
    }
    state = {
        topic:{},
        keys:[],
        editing: false,
        currVal: ''
    }
    componentDidMount = async () => {
        this.SchemaService.findWidgetById(this.props.nuid, this.props.domain, this.props.id)
            .then(response => {this.setState({
                topic:response,
                keys:Object.keys(response)
            })})   
    }
    render(){
        return(
            <li>
                {console.log(this.state.key)}
                {!editing && <div className="row">
                    {this.state.keys.map(key=>
                        <button type="button" className="btn btn-link">
                            {this.state.topic[key]}
                        </button>    
                        )}
                    <button type="button" className="btn btn-warning"
                        onClick={()=>this.setState({editing:true})}>
                        Edit
                    </button>
                </div>}
                {editing && 
                    <ul className="list-group">
                        {this.state.keys.map((key,index)=>
                            <li key={index}>
                                <div className="row">
                                    <div className="col-4">
                                        {key}
                                    </div>
                                    <div className="col-8">
                                        <input
                                            onChange={(e)=>this.setState({currVal:e.target.value})}
                                            value={this.state.currVal}
                                            placeholder={this.state.topic[key]}/>
                                    </div>
                                </div>
                            </li>
                            )}
                    </ul>
                }
            </li>
        )
    }
}
export default SchemaComponent;