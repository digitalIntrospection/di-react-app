import React, { Component } from 'react';
import '../App.css';

class ButtonComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='btn'>
                <div >{this.props.text}</div>
            </div>
        );
    }
}

export default ButtonComponent;