import React from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";

class LocalList extends React.Component{
  render(){
    return(
				<Card>
					<Card.Header className="bg-white">
						<h4>
						      Data Kasus Coronavirus di Indonesia Berdasarkan Provinsi
            </h4>
					</Card.Header>
					<Card.Body>
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
							    <tr>
							      <th scope="row">1</th>
							      <td>Jatim</td>
							      <td>900</td>
							      <td>999</td>
							      <td>9</td>
							    </tr>
							    <tr>
							      <th scope="row">1</th>
							      <td>Jatim</td>
							      <td>900</td>
							      <td>999</td>
							      <td>9</td>
							    </tr>
							    <tr>
							      <th scope="row">1</th>
							      <td>Jatim</td>
							      <td>900</td>
							      <td>999</td>
							      <td>9</td>
							    </tr>
							    <tr>
							      <th scope="row">1</th>
							      <td>Jatim</td>
							      <td>900</td>
							      <td>999</td>
							      <td>9</td>
							    </tr>
                </tbody>
						</Table>
					</Card.Body>
				</Card>
    )
  }
}

export default connect()(LocalList);
