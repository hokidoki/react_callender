import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux';
import {nextMonth, prevMonth} from '../reducer/monthReducer';
import Tr from '../component/tr'

class Header extends Component {
  
  render() {
    
    return (
      <Fragment>
          <tr>
              <td><button onClick={this.props.prevMonth}/></td>
              <td colSpan="5">Today : {this.props.yy}-{this.props.mm}</td>
              <td><button onClick={this.props.nextMonth}/></td>
          </tr>
          <tr>
            <td>일</td>
            <td>월</td>
            <td>화</td>
            <td>수</td>
            <td>목</td>
            <td>금</td>
            <td>토</td>
          </tr>
          
          
             <Tr lastdate={this.props.lastdate} getday={this.props.getday} mm={this.props.mm} ></Tr>
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