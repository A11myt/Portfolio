import React, { Component } from 'react';
import { codepen, github, twitter, linkedin, instagram } from '../../assets/icons/Icons';

export class Navigation extends Component {

  state = {
    title: 'Portfolio',
    mail: 'Jason.j@gmx.de',
    socials: {
      github:
      {
        name: 'A11myt',
        image: github,
        link: 'https://github.com/A11myt',
      },
      instagram: {
        name: 'Jason Johnson',
        image: instagram,
        link: 'https://www.instagram.com/jason_jo94/',
      },
      twitter: {
        name: 'Jason Johnson',
        image: twitter,
        link: 'https://twitter.com/Jason_Baam',
      },
      linkedin: {
        name: 'Jason Johnson',
        image: linkedin,
        link: 'https://www.linkedin.com/in/jason-johnson-8b305b82/',
      },
      codepen: {
        name: 'Jason Johnson',
        image: codepen,
        link: 'https://codepen.io',
      },
    },
    navigation: [
      { name: 'Home', link: '/' },
      { name: 'Ueber Mich', link: '#about' },
      { name: 'Projekte', link: '#projects' },
      { name: 'Kontakt', link: 'contact' }
    ],
    tNavigationState: '',
    toggleNavigation: false
  }

  navigation() {
    return (
      <React.Fragment>
        <div className='  bg-main-25 p-5 '>
          <div className='hidden md:grid grid-cols-3 max-w-7xl m-auto w-full'>
          <h2 className='font-DMMono font-black text-xl flex float-left'>
            {this.state.title}
          </h2>
         
          <ul className='text-right col-span-2 '>
            {this.props.navigation.map((link, id) => {
              return (
                <li className={'font-Hack float-right ml-4'}
                  onClick={() => { this.setState({ tNavigationState: id }) }}
                >
                  <div className='text-accent-25 inline text-base'>{id}</div>
                  <div className='text-main-10 inline '>/{link}</div></li>
              )
            }).reverse()}
          </ul>
          </div>
        </div>
        <div className='md:hidden float-right fixed right-10 left-auto'>
          {this.state.toggleNavigation === true
            ? 
              <div className='mr-[-1.5rem] bg-accent-25 flex flex-col items-center justify-between min-w-[50vw] min-h-[100vh]'>
            <div className='fixed p-5 right-10 left-auto' onClick={() => { this.setState({ toggleNavigation: false }) }} >
            <div>Close</div>

            {/* Responsive Layout anpassen */}
            {this.props.navigation.map((link, id) => {
              return (
                <li className={'font-Hack float-right ml-4'}
                  onClick={() => { this.setState({ tNavigationState: id }) }}
                >
                  <div className='text-accent-25 inline text-base'>{id}</div>
                  <div className='text-main-10 inline '>/{link}</div></li>
              )
            }).reverse()}

              </div>
            </div>
            : <div className='p-5' onClick={() => { this.setState({ toggleNavigation: true }) }}>
              <span className='block h-0.5 w-8 animate-pulse bg-accent-25'></span>
              <span className='block h-0.5 w-8 animate-pulse bg-accent-25 mt-2 mb-2'></span>
              <span className='block h-0.5 w-8 animate-pulse bg-accent-25'></span>
            </div>
          }
        </div>
      </React.Fragment >
    )
  }

  media() {
    return (
      <React.Fragment className='hidden '>

        {/* media left */}
        <div className='hidden md:block fixed w-10 right-auto bottom-0 left-10 '>
          <div className='flex flex-col items-center relative'>
            {Object.keys(this.state.socials).map((key) => {
              return (
                <div>
                  <img src={this.state.socials[key].image} className='h-6 m-2' />
                </div>
              )
            })
            }
            <hr className='h-[10vh] w-[0.2vw] mb-0 m-auto bg-main-10 text-main-10 item-center' />
          </div>
        </div>

        {/* media right */}
        <div className='fixed bottom-0 right-10 w-10 left-auto'>
          <div className='flex flex-col items-center h-[35vh]'>
            {this.props.navigation.map((link, id) => {
              return (
                <div
                  className={id == this.state.tNavigationState ?
                    'hidden md:block h-3 w-3 border-solid border-2 border-main-10 rotate-45 m-2 bg-main-10' :
                    'hidden md:block h-3 w-3 border-solid border-2 border-main-10 rotate-45 m-2 bg-main-100'}
                  onClick={() => { this.setState({ tNavigationState: id }) }}
                >
                </div>
              )
            })}
          </div>

          <div className='hidden md:flex flex-col item-center vertical-rl w-10'>
            <div className='m-auto mb-5' >
              <a className='text-accent-25 font-Hack text-[16px]' href={'mailto:' + this.state.mail}>
                {this.state.mail} </a>
            </div>
          </div>
          <div className='hidden md:block relative'>
            <hr className='h-[10vh] w-[0.2vw] mb-0 m-auto bg-main-10 text-main-10 item-center' />
          </div>
        </div>
      </React.Fragment >
    )
  }

  render() {

    return (
      <React.Fragment>
        {this.navigation()}
        {this.props.media == true ? this.media() : ''}
      </React.Fragment>
    )
  }
}