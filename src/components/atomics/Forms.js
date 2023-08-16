import React, { Component } from 'react';

export class Label extends Component {
    state = {

    }
    render() {
        return (
            <label  className= 'font-Hack' >{this.props.text}</label>
        );
    }
}

export class Input extends Component {
    state = {

    }
    render() {
        return (
            <React.Fragment>
                <input
                    id={this.props.id}
                    className='bg-main-100 p-1 font-Hack w-48'
                    placeholder={this.props.placeholder}
                    type={this.props.type}
                    disabled={this.props.disabled}
                />
            </React.Fragment>
        )
    }
}

export class FormGroup extends Component {
    state = {

    }

    render() {
        return (
            <div className='grid grid-col-2 m-2 '>
                <Label
                    className='font-Hack bg-accent-50'
                    text={this.props.text} />
                    
                <Input
                    className='bg-main-100 p-1 font-Hack'
                    id={this.props.id}
                    placeholder={this.props.placeholder}
                    type={this.props.type}
                    disabled={this.props.disabled} />
            </div>
        );
    }
}
