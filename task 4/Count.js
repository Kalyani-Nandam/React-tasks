import React,{Component} from 'react'

class Count extends Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    increment(){
        this.setState({
            count: this.state.count+1
        },
           ()=>{ console.log("count :: ",this.state.count)}
        )
    }
    decrement(){
        this.setState({
            count: this.state.count-1
        },
           ()=>{ console.log("count :: ",this.state.count)}
        )
    }
    reset(){
        this.setState({
            count: 0
        },
           ()=>{ console.log("count :: ",this.state.count)}
        )
    }

    render() {
        return (
            <div>
              <h1>count - {this.state.count}</h1>
              <button onClick={() => this.increment()}>increment </button>
              <button onClick={() => this.decrement()}>decrement </button>
              <button onClick={() => this.reset()}>reset</button>
            </div>      
        )
    }
}

export default Count;
