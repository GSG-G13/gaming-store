import React, { Component, useState } from 'react'
import './style.css'
import Nav from '../nav/Nav';
import Title from '../Title/Title';
import Repos from '../Repos/Repos';


class Page extends Component {
  state = {
    title: ''
  }

  setTitle = (e)=> {
    this.setState(() => ({title: e}))
  }

  render() {
    const { title } = this.state
    return (
      <div className='UserProfile'>
        <Nav title={title} setTitle={this.setTitle} />
        <Title className={'title'} content={''} level={4}/>
        <Repos searchInput={title}/>
      </div>
    )
  }
}

export default Page