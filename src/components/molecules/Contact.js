import React, { Component } from 'react';
import { FormGroup, Label } from '../atomics/Forms';
import { Section } from '../atomics/Section';
import { Button } from '../atomics/Button';

export class Contact extends Component {
    state = {
    }

    render() {
        return (
            <React.Fragment>

                <Section bgColor={this.props.bgColor}>

                    <div className='animate-slide-in-left text-center text-2xl transition-all sm:text-4xl font-DMMono'>
                        {this.props.title}
                    </div>
                    <div className='animate-slide-in-left mt-8 text-center text-lg transition-all sm:text-xl'>
                        {this.props.content}
                        <br/>
                        <Button 
                   
                        label={this.props.label} 
                        activeLink={this.props.activeLink} 
                        link={this.props.link} />
                    </div>
                </Section>

            </React.Fragment>
        );
    }
}
