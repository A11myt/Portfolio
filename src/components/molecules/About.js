import React, { Component } from "react";
import { Section } from "../atomics/Section";

export class About extends Component {
    state = {}

    render() {
        const about = {
            text: 'Wilkommen auf meiner Portfolio Website, hier stelle ich meine Projekte vor. Vor allem Arbeite ich als Webentwickler, lerne aber immer gerne neues dazu. Aktuell arbeite ich als Frontend entwicker bei espresso-international.de und belege einen Fernstudienkurs für den Abschluss als Anwendungsentwickler. In meiner restlichen Freizeit arbeite ich dadran ->',
            skills: ['JS (ES6+)', 'TypeScript', 'React', 'Eleventy', 'Node', 'WordPress'],
        }

        return (
            <React.Fragment>
                <Section bgColor={this.props.bgColor}>
                    About meee
                </Section>
            </React.Fragment>

        );
    }
}

