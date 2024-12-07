import { Component } from "react";
import CounterButton from "../CounterButton/CounterButton";
import "./Counter.css";

export default class Counter extends Component {

    constructor(){
        super();
        this.state = {
            counter:0
        }

        this.increment = this.increment.bind(this);
        this.resetCounter = this.resetCounter.bind(this);
    }

    render(){
        return(<table className="Counter">
            <tbody>
            <tr> <CounterButton by = {1} clickAction = {this.increment}></CounterButton> <CounterButton by = {10} clickAction = {this.increment}></CounterButton></tr>
            <tr> <CounterButton by = {100} clickAction = {this.increment}></CounterButton> <CounterButton by = {1000} clickAction = {this.increment}></CounterButton></tr>
            <tr id = "spanRow"> <span>{this.state.counter}</span></tr>
            <tr id = "spanRow"> <CounterButton by = "reset" clickAction = {this.resetCounter}></CounterButton></tr>
            </tbody>
               
               </table>
        );
    }

    increment(by){
        this.setState({
            counter: this.state.counter + by
        });
    }

    resetCounter(){
        this.setState({
            counter: 0
        })
    }

}