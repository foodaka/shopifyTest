import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './action'

class DataComponent extends React.Component{

  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.actions.fetchAllData()

  }

  render(){
    let data = this.props.reducer[0].data;

    //Filter by type
    let filterByProductType = data.filter(item =>{
      if((item.product_type = "Watch") || (item.product_type = "Clock")){
        return true;
      } else {
        return false;
      }
    })
    //calculate total
    let totalPrice = 0
    filterByProductType.map(item=>{
      item.variants.map(price =>{
        totalPrice += parseFloat(price.price,10)
        return price
      })
    })
    return(
      <div>
        {`hello shopify, the watches and clocks total  = $ ${totalPrice.toFixed(2)}`}
      </div>
    )
  }
}


function mapStateToProps(getDataReducer) {
  return {
    reducer: getDataReducer
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DataComponent);
