import React, { Component } from 'react';
import { Section } from '../atomics/Section';
import { Project } from '../atomics/Project';

import myData from '../../assets/projects.json';

export class Projects extends Component {
    constructor(props) {
        super(props);
    }

    state = {

    }

    render() {

        return (
            <Section bgColor={this.props.bgColor}>
                <span>Projekte</span>
                <div className='grid grid-cols-3 justify-items-center grid-flow-column pb-10 pt-10'>
                    {myData.project.map((p, i) => {
                        return (
                            <div className='mb-5'>
                            <Project  
                            id={p.id}
                            language={p.language}
                            title={p.title}
                            img={p.img}
                            /> 
                            </div>
                        )
                    })}
                </div>
            </Section>
        );
    }
}

