import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Chart from "../Chart/Chart.component";

import { connect } from "react-redux";
import { IRootStore } from "../../redux/root.interface";
import { IglobalData  } from "../../redux/globalData/globalData.interface";

import "./Stat.style.scss";

interface Props{
  dataSummary:IglobalData[]
}

class Stat extends React.Component<Props>{

  renderFooterInfo(){
    return this.props.dataSummary.map((_data:IglobalData) => {
      return(
        <Col sm={12} md={4} lg={4} xl={4}>
          <p className="text-center mb-0">{_data.name}</p>
          <h5 className="text-center mb-0">{_data.value}</h5>
          <p className="text-center mb-0 text-secondary">ORANG</p>
        </Col>
      )
    })
  }

  render(){
    return(
      <Row>
					<Col md={12}>
						<Card className="stat">
							<Card.Header className="bg-white stat__head">
								<h4>Statistik Kasus Coronavirus</h4>
							</Card.Header>
							<Card.Body className="stat__body">
								<canvas id="line-chart" width="800" height="450"></canvas>
                <Chart/>
							</Card.Body>
							<Card.Footer className="card-footer bg-white stat__footer">
								<Row>
									{this.renderFooterInfo()}
								</Row>
							</Card.Footer>
						</Card>
					</Col>
				</Row>
    )
  }
}

const mapsStateToProps = ({ globalData:{ dataSummary } }:IRootStore) => ({
  dataSummary
})

export default connect(mapsStateToProps)(Stat);
