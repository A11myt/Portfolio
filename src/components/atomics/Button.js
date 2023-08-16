import React, { Component } from 'react';

export class Button extends Component {
    state = {
        root: 'my-btn',
        custom: '',
        full: '',
    }

    constructor(props) {
        super(props);
        this.state.custom = this.props.tailwind;
        this.state.full = this.state.root + ' ' + this.state.custom;
    }

    render() {
        return (
            <button className=' bg-main-25' onClick={this.props.onClick}>
                {this.props.activeLink
                    ? <a href={this.props.link}>
                        {this.props.label}
                    </a>
                    : this.props.label}
            </button>
        );
    }
}