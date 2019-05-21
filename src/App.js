import React, { Component } from 'react'
import Header from './component/header'
import { connect } from 'react-redux'
import './table.css'

 class App extends Component {   
  render() {
    console.log(this.props);
    return (
      <div>
        <table className="date_table">
          <tbody><Header yy={this.props.yy} mm={this.props.mm} firstday={this.props.firstday} lastdate={this.props.lastday} getday={this.props.getday}/></tbody>
        </table>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  yy : state.yy,
  mm : state.mm,
  firstday : state.firstday,
  lastday : state.lastdate,
  getday : state.first_get_day,
})



export default connect(mapStateToProps,null)(App);