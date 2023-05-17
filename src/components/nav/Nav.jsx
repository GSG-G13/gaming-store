import React, { Component } from 'react';

class Nav extends Component {
  render() {
  const {setTitle, title } = this.props;
    return (
      <div className="nav">
          <input type="text" className="search" value={title} 
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Username' />
        </div>
    )
  }
}

export default Nav