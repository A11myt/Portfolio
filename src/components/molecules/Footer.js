import React, { Component } from "react";
import { Section } from "../atomics/Section";

export class Footer extends Component {
    state = {

    }
    render() {
        return (
            <Section className="" bgColor={'bg-main-25'}>
                <div className="mt-10 mb-10 text-accent-25 grid grid-cols-3 justify-items-center">
                    <span>Archiv</span>
                    <span>Impressum</span>
                    <span>Cookie-Einstellungen</span>

                </div>
            </Section>
        );
    }
}

