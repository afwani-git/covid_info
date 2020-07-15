import React from "react";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";
import { IRootStore } from "../../redux/root.interface";
import { createStructuredSelector } from "reselect";
import { mappingData } from "../../redux/globalData/globalData.selector";


interface Props{
  data?:any
}


interface dataSets {
    data:number[],
    label:string,
    borderColor:string,
    fill:boolean
}

interface State{
  data?: {
    labels:string[],
    datasets:dataSets[],
    options:{
      title:{
        display: boolean,
        text: string
      }
    }
  }
}


class Chart extends React.Component<Props,State>{

  constructor(props: Props){
    super(props);

    this.state = {
      data:{
        labels:[],
        datasets:[],
        options:{
          title:{
            display:true,
            text:"Stat Coronavirus World"
          }
        }
      }
    }
  }


  static getDerivedStateFromProps(nextProps : Props, prevState: Props){
    console.log(nextProps);
    console.log(prevState);
    return {
      data:{
        labels:nextProps.data.reportDate,
        datasets:[
          {
            label:"Total confirmed in china",
            data:nextProps.data.totalConfirmedInChina,
            borderColor:"#3e95cd",
            fill:false
          },
          {
            label:"Total confirmed outted china",
            data:nextProps.data.totalConfirmedXChina,
            borderColor:"#8e5ea2",
            fill:false
          },
          {
            label:"Total deaths",
            data:nextProps.data.totalDeath,
            borderColor:"red",
            fill:false
          }
        ],
        options:{
          title:{
            display:true,
            text:"Stat Coronavirus World"
          }
        }
      }
    }
  }


    render(){
      return(
        <React.Fragment>
          {
            this.state.data && this.state.data.labels.length ?
              <Line data={this.state.data} /> : "loading... . ."
          }
        </React.Fragment>
      )
    }
}

const mapsStateToProps = createStructuredSelector<IRootStore,Props>({
  data:state => mappingData(state.globalData)
})

export  default connect(mapsStateToProps)(Chart)
