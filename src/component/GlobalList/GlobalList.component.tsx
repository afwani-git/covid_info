import React from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { connect } from "react-redux";
import { IRootStore } from "../../redux/root.interface";
import { IglobalDataList } from "../../redux/globalData/globalData.interface";

import { createStructuredSelector } from "reselect";
import { selectCountryList } from "../../redux/globalData/globalData.selector";

interface Props{
  data:IglobalDataList[]
}


class GlobalList extends React.Component<Props>{

  renderTemplate(){
      return  this.props.data.map((_dat,index) => (
        <tr key={index}>
          <th scope="row">{index+1}</th>
          <td>{_dat.attributes.Country_Region}</td>
          <td>{_dat.attributes.Confirmed}</td>
          <td>{_dat.attributes.Recovered}</td>
          <td>{_dat.attributes.Deaths}</td>
        </tr>
      ))
  }

  render(){
    return(
      <Card>
        <Card.Header className="bg-white">
          <h4>
                Data Kasus Coronavirus di Dunia
          </h4>
        </Card.Header>
        <Card.Body>
          <div className="table-responsive"  style={{height:"500px"}}>
            <Table className="table-bordered">
              <thead>
                <tr>
                  <th scope="col">No</th>
                    <th scope="col">Negara</th>
                    <th scope="col">Positif</th>
                    <th scope="col">Sembuh</th>
                    <th scope="col">Meninggal</th>
                </tr>
              </thead>
              <tbody>
                    {this.renderTemplate()}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    )
  }
}

const mapStateToProps = createStructuredSelector<IRootStore,Props>({
  data:state => selectCountryList(state.globalData)
})

export default connect(mapStateToProps)(GlobalList);
