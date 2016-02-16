import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';

class Header extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <img src={require('./logo-small.png')} width="38" height="38" alt="React" />
          <span className={s.brandTxt}>Adyoulike</span>
        </div>
      </div>
    );
  }

}

export default withStyles(Header, s);
