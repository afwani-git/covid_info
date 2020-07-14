import React from "react";
// import { Line } from "react-chartjs-2";
import { connect } from "react-redux";
import { IRootStore } from "../../redux/root.interface";
import { createStructuredSelector } from "reselect";
import { mappingData } from "../../redux/globalData/globalData.selector";


interface Props{
  data?:Object
}

class Chart extends React.Component<Props>{
    render(){
      console.log(this.props.data);
      return(
        <React.Fragment>
          <p>i love TS</p>
        </React.Fragment>
      )
    }
}

const mapsStateToProps = createStructuredSelector<IRootStore,Props>({
  data:state => mappingData(state.globalData)
})

export  default connect(mapsStateToProps)(Chart)
