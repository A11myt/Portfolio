import React, { Component } from 'react';
import { profile } from '@/assets/images/Images';
import { Section } from '../atomics/Section';
import Image from 'next/image';

export class Hero extends Component {
    state = {

    }
    render() {
        return (
            <React.Fragment>
                <Section bgColor={'bg-main-50'}>
                        <div className='flex w-full flex-col items-center justify-center py-12  h-[80vh]'>
                            <div className='h-60 w-60 rounded-full shadow-2xl shadow-black/40 '>
                                <Image width src={profile} alt='no img'/>
                            </div>
                            <div className='mt-8 flex max-w-full flex-col items-center px-6 transition-all sm:max-w-2xl sm:px-12 xl:max-w-4xl'>
                                <div className='animate-slide-in-left text-center text-2xl transition-all sm:text-4xl font-DMMono'>
                                    {this.props.title}
                                </div>
                                <div className='animate-slide-in-left mt-8 text-center text-lg transition-all sm:text-xl'>
                                    {this.props.content}
                                </div>
                            </div>
                        </div>
                        <div className='flex h-[14vh] w-full items-center justify-center'>
                            <div>
                                <div className='rounded-full w-3 h-8 bg-main-10 animate-bounce'></div>
                            </div>
                        </div>
                </Section>
            </React.Fragment >
        );
    }
}