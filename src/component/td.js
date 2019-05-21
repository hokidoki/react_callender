import React, { Component,Fragment } from 'react'


export default class Td extends Component {
     
  render() {
    const {item, lastdate} = this.props;
    const pushed_array = ()=>{
      var array = [];
      for(var i = item-6; i<=item; i++){
        if(i<=0){
          array.push(" ");
        }else if(i>0 && i<=lastdate){
          array.push(i);
        }
      }
      return array;
    }
    const pushed_array_list = pushed_array().map((index)=>(<td>{index}</td>));

    return(
      <Fragment>
        {pushed_array_list}
      </Fragment> 
    )
  }
}

