import React from 'react';
import  "./App.style.scss";
import Header from "./component/Header/Header.component";
import Info from "./component/Info/Info.component";
import Title from "./component/Title/Title.component";
import Stat from "./component/Stat/Stat.component";
import LocalList from "./component/LocalList/LocalList.component";
import Container from "react-bootstrap/Container";
import { fetchStart,fetchStartD }  from "./redux/globalData/globalData.actions";
import { localDataFetchStart, localDataByProvFetchStart } from "./redux/lokalData/lokalData.actions";
import { Dispatch } from "redux";
import { connect } from "react-redux";

interface Props{
  fetchData?:Function,
  fetchDataDaily?: Function,
  fetchDataLocal?: Function,
  fetchDataLocalProv?:Function
}

class App extends React.Component<Props>{

  componentDidMount(){
    this.props.fetchData!();
    this.props.fetchDataDaily!();
    this.props.fetchDataLocal!();
    this.props.fetchDataLocalProv!();
  }

  render(){
    return (
      <React.Fragment>
        <Header/>
        <div className="bg"></div>
        <Container>
          <section id="title">
            <Title/>
          </section>
          <section id="info">
            <Info/>
          </section>
          <section id="statistic">
            <Stat/>
          </section>
          <section id="dataLocal">
            <LocalList/>
          </section>
        </Container>
      </React.Fragment>
    );
  }
}


const mapsDispatchToProps = (dispatch: Dispatch):Props => ({
	fetchData:() => dispatch(fetchStart()),
  fetchDataDaily:() => dispatch(fetchStartD()),
  fetchDataLocal:() => dispatch(localDataFetchStart()),
  fetchDataLocalProv:() => dispatch(localDataByProvFetchStart())
})

export default connect(null,mapsDispatchToProps)(App);
