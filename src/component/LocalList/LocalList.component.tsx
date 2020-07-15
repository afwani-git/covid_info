import React from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectDataProv } from "../../redux/lokalData/lokalData.selector";
import { ILocalDataByProv } from "../../redux/lokalData/lokalData.interface";
import { IRootStore } from "../../redux/root.interface";

interface Props{
  data:ILocalDataByProv[]
}

class LocalList extends React.Component<Props>{

  renderTemplate = () => {
    const {  data }  = this.props;
    return data.map((_dat:ILocalDataByProv,index) =>{
      return(
        <tr key={index}>
          <th scope="row">{index}</th>
          <td>{_dat.attributes.Provinsi}</td>
          <td>{_dat.attributes.Kasus_Posi}</td>
          <td>{_dat.attributes.Kasus_Semb}</td>
          <td>{_dat.attributes.Kasus_Meni}</td>
        </tr>
      )
    })
  }

  render(){
    return(
				<Card>
					<Card.Header className="bg-white">
						<h4>
						      Data Kasus Coronavirus di Indonesia Berdasarkan Provinsi
            </h4>
					</Card.Header>
					<Card.Body>
            <div className="table-responsive"  style={{height:"500px"}}>
  						<Table className="table-bordered">
  							<thead>
  								<tr>
  									<th scope="col">No</th>
  								    <th scope="col">Provinsi</th>
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
  data:state => selectDataProv(state.lokalData)
})

export default connect(mapStateToProps)(LocalList);
