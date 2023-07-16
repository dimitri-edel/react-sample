import React from "react";

class StatefullGreeting extends React.Component {    
    // Need to pass the props to the contructor
    constructor(props){
        // It is mandatory to pass the props to the super-class
        super(props);
        // Initialize state with all its properties
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
        };
    }

    handleClick() {
        // It is mandatory to call setState() in order to change its properties,
        // because it will alsoe rerener the state properties
        this.setState({
            introduction: "Goodbye!",
            buttonText: "Enter",
        });
    }

    // Override the render method
    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                <button onClick={()=>this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }

}

export default StatefullGreeting;