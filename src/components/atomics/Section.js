import React, { Component } from 'react';

export class Section extends Component {
    state = {
        full: '',
    }

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div className={`${this.props.bgColor} pt-4 pb-4`}>
                <div className=" flex flex-1 flex-col font-Hack">
                    <div className='max-w-5xl m-auto w-full'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}