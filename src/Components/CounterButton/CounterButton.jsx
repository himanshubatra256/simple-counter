import { Component } from "react";
import "./CounterButton.css";


export default class CounterButton extends Component{
    
    render(){
        return(
            <button onClick={this.addNumber}>{this.props.by}</button>
        );
    }

    addNumber = () =>{
        this.props.clickAction(this.props.by);
    }
}