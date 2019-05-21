import React, { Component, Fragment } from 'react'
import Td from './td'


export default class tr extends Component {

  render() {
    const { lastdate, getday,mm } = this.props;
    console.log(mm);
    let week = Math.ceil(lastdate / 7);
    if (getday == 6 || getday == 5 || mm == 2) {
      week = week + 1;
    }

    const tr_array = () => {
      var set_date = 1;
      var check = 0;
      var week_array = [];
      for (var i = 1; i <= week; i++) {
        if (check == 0) {
          set_date = (6 - getday) + 1;
          check = 1;
        } else {
          set_date = set_date + 7;
        }
        week_array.push(set_date);
      }
      return week_array;
    }


    const tr_array_list = tr_array().map((item, index) => (<tr><Td item={item} lastdate={lastdate} /></tr>));


    return (

      <Fragment>
        {tr_array_list}
      </Fragment>
    )
  }
}

