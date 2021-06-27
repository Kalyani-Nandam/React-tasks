import React, {Component} from 'react'
class EventBind extends Component{
  constructor(props){
     super(props)
     this.state = {
       message: 'Hello React'
      }
    }
    clickHandler(){
        this.setState({
            message:'Welcome to React'
        })
    }
   
    render(){
      return(
         <div>
            <h1>{this.state.message}</h1>
            <button onClick={this.clickHandler}>click me</button>
         </div>
      )
   }
}
export default EventBind;
