import React, { Component } from 'react'
import Header from './component/header'
import { connect } from 'react-redux'
import './table.css'

 class App extends Component {   
  render() {
    return (
      <div>
        <table className="date_table">
          <tbody><Header yy={this.props.yy} mm={this.props.mm} /></tbody>
        </table>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  yy : state.yy,
  mm : state.mm,
  firstday : state.firstday,
  lastday : state.lastday
})



export default connect(mapStateToProps,null)(App);