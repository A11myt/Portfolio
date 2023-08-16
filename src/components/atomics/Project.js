import React, { Component } from "react";
import { projectDefault } from '@/assets/images/Images';
// import { profile } from '@/assets/images/Images';

import { Button } from './Button';
import Image from "next/image";

export class Project extends Component {
    state = {
    }

    render() {
        return (
            <React.Fragment>

                <Modal id={this.props.id} >
                    <div className="h-3/4 w-2/4 bg-main-125 relative">
                        
                        <Image width={600} height={1200} src={this.props.img == null ? projectDefault : this.props.img}
                            alt={`img ${this.props.img} not found`} 
                            />


                        <div className="h-3/4 w-2/4 absolute top-0">
                            {this.props.id}
                            {this.props.title}
                        </div>
                    </div>
                    <Button label='X' activeLink={false} onClick={() => { Modal.toggleOverlay(this.props.id); console.log(this.props.id) }} />
                </Modal>


                <div className="group relative bg-main-50 w-64 h-40 font-Hack"
                    onClick={() => { Modal.toggleOverlay(this.props.id); console.log(this.props.id); }} >
                    
                    <Image className="w-full" width={300} height={200} 
                    src={this.props.img == null ? projectDefault : this.props.img} 
                    alt='img not found' />

                    <span className="absolute top-2 right-2">
                        {this.props.id} / {this.props.language}
                    </span>

                    <div className="opacity-0 bg-main-125 absolute h-10 w-full 
                    bottom-0 items-center py-2.5
                    group-hover:opacity-100 duration-200">

                        <span className="grid justify-items-center">
                            {this.props.title}
                        </span>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export class Modal extends Component {
    constructor(props) {
        super(props);
    }

    static toggleOverlay(elementId) {
        document.getElementById(elementId).classList.toggle("invisible");
        document.getElementById(elementId).classList.toggle("opacity-0");
    }

    render() {
        return (
            <React.Fragment>
                <div id={this.props.id} className="fixed left-0 top-0 w-full h-screen z-50 
                backdrop-filter backdrop-blur-sm backdrop-saturate-[.9] flex items-center justify-center 
                transition-all ease-in-out duration-300 py-8 invisible opacity-0">
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}