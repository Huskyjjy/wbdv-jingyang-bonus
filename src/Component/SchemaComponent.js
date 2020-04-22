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
        currVal: {},
        newkey: 'New',
        newval: 'New field'
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
                {console.log(this.state.keys)}
                {!this.state.editing && <div className="row">
                    {this.state.keys.filter(key=>!key.includes('_')).map((key,index)=>
                        <button type="button" className="btn btn-link" key={index}>
                            {this.state.topic[key]}
                        </button>    
                        )}
                    <button type="button" className="btn btn-warning"
                        onClick={()=>this.setState({editing:true})}>
                        Edit
                    </button>
                </div>}
                {this.state.editing && 
                    <ul className="list-group">
                        {this.state.keys.filter(key=>!key.includes('_')).map((key,index)=>
                            <li key={index}>
                                <div className="row">
                                    <div className="col-4">
                                        {key}
                                    </div>
                                    <div className="col-8">
                                        <input
                                            onChange={(e)=>{
                                                this.state.currVal[key] = e.target.value
                                                this.forceUpdate()
                                            }}
                                            value={this.state.currVal[key]}
                                            placeholder={this.state.topic[key]}/>
                                    </div>
                                </div>
                            </li>
                            )}
                        <li>
                                <div className="row">
                                    <div className="col-4">
                                        <input
                                            onChange={(e)=>{
                                                this.state.newkey = e.target.value
                                                this.state.currVal[this.state.newkey] = this.state.newval
                                                this.forceUpdate()
                                            }}
                                            value={this.state.newkey}
                                            placeholder="New"/>
                                    </div>
                                    <div className="col-8">
                                        <input
                                            onChange={(e)=>{
                                                this.state.newval = e.target.value
                                                this.state.currVal[this.state.newkey] = this.state.newval
                                                this.forceUpdate()
                                            }}
                                            value={this.state.newval}
                                            placeholder="New field value"/>
                                    </div>
                                </div>
                        </li>
                        <div>
                        <button className="btn btn-warning"
                                onClick={()=>{
                                    console.log(this.state.currVal)
                                    this.SchemaService.updateWidgetById(this.props.nuid,this.props.domain,this.props.id,this.state.currVal)
                                        .then(res=>window.location.reload(false))
                                    this.setState({editing:false})
                                }
                                }>
                            Save
                        </button>
                        <button className="btn btn-danger"
                                onClick={()=>{
                                    this.SchemaService.deleteWidgetById(this.props.nuid,this.props.domain,this.props.id)
                                        .then(res=>window.location.reload(false))
                                }}>
                            Delete
                        </button>
                        </div>
                    </ul>
                }
            </li>
        )
    }
}
export default SchemaComponent;