import React from 'react';
import  "./App.style.scss";
import Header from "./component/Header/Header.component";
import Info from "./component/Info/Info.component";
import Title from "./component/Title/Title.component";
import Container from "react-bootstrap/Container";
import { fetchStart }  from "./redux/globalData/globalData.actions";
import { Dispatch } from "redux";
import { connect } from "react-redux";

interface Props{
  fetchData:Function
}

class App extends React.Component<Props>{

  componentDidMount(){
    this.props.fetchData();
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
        </Container>
      </React.Fragment>
    );
  }
}


const mapsDispatchToProps = (dispatch: Dispatch) => ({
	fetchData:() => dispatch(fetchStart())
})

export default connect(null,mapsDispatchToProps)(App);
