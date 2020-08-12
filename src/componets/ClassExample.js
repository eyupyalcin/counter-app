import React, { Component } from 'react'
import "./style.css"
class ClassExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }
    increment = (event) => {
        this.setState({
            counter: this.state.counter + 1

        })

    }

    decrement = (event) => {
        this.setState({
            counter: this.state.counter - 1

        })

    }
    degistir=(operation)=>{
        this.setState({
            counter : operation ==="azalt" ? this.state.counter -1 : this.state.counter + 1
        })
    }




    render() {
        const { counter } = this.state;

        return (

            <div className="cntr">
                <h3>{counter}</h3>
                <button className="btn" onClick={()=>this.degistir("arttir")}>+</button>
                <button className="btn" onClick={()=>this.degistir("azalt")}>-</button>

            </div>
        )
    }
}

export default ClassExample
