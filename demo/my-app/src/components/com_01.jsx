import React, { Component } from 'react';
class Comp  extends React.Component {
    state = 
    {
        count: 1,
        imageUrl: "https://picsum.photos/200"
    }
    styles = 
    {
        fontSize: 50,
        fontWeight: 'bold'
    }

    handleIncrement()
    {
        console.log("increment", this);
    }
    
    constructor()
    {
        super();
        console.log("constructor", this);
    }

    render() 
    { 
        return (
            <div>
                <img src={this.state.imageUrl} alt="" />
                <span style={this.styles}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} style={this.styles} >Increment</button>
            </div>
        );
    }
    formatCount()
    {
        if(this.state.count==0)
        {
            return "zero";
        }else
        {
            return "not";
        }
    }
}
 
export default Comp;