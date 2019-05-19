import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux';
import {nextMonth, prevMonth} from '../reducer/monthReducer';

class Header extends Component {
  
  render() {
    return (
      <Fragment>
          <tr>
              <td><button onClick={this.props.prevMonth}/></td>
              <td colSpan="5">Today : {this.props.yy}-{this.props.mm}</td>
              <td><button onClick={this.props.nextMonth}/></td>
          </tr>
      </Fragment>
    )
  }
}


const mapDispatchToProps =(dispatch) => {
  return{
    nextMonth : ()=>dispatch(nextMonth()),
    prevMonth : ()=>dispatch(prevMonth()), 
  }
}

export default connect(null,mapDispatchToProps)(Header);