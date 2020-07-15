import React from "react";
import { connect } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import inaFlag from "../../asset/indo.png";
import { IRootStore } from "../../redux/root.interface";
import { IglobalData } from "../../redux/globalData/globalData.interface";
import { ILocalData } from "../../redux/lokalData/lokalData.interface";
import InfoCard from "../InfoCard/InfoCard.component";
import recoveredPhoto from "../../asset/happy-ipM.png";
import deathPhoto from "../../asset/death.png"
import postitfPhoto from "../../asset/sad.png";

import {  createStructuredSelector } from "reselect";
import * as globalData  from "../../redux/globalData/globalData.selector";
import * as localData from "../../redux/lokalData/lokalData.selector";

import "../InfoCard/InfoCard.style.scss";

interface Props{
	globalData?:IglobalData[],
	lokalData?:ILocalData[]
}


class Info extends React.Component<Props>{
	renderTemplate = () => {
		const bgColor: string[] = ["red","green","purple"];
		const photo: string[] = [postitfPhoto,recoveredPhoto,deathPhoto];
		const { globalData }  = this.props;
		return globalData && globalData.map((_data: IglobalData,index) => {
			return(
				<Col key={index} sm={12} md={6} lg={6} xl={3}>
					<InfoCard key={index} {..._data} bgColor={bgColor[index]} photo={photo[index]} />
				</Col>
			)
		})

	}


	render(){
		const { lokalData } = this.props;
		console.log(lokalData![0]);
		return(
			<Row>
				{this.renderTemplate()}
				<Col sm={12} md={6} lg={6} xl={3}>
				{
					lokalData && (
						<Card className="info info--orange">
			          <Card.Body className="d-flex justify-content-around align-content-center card-body info__body">
			              <div className="info__left">
			                <h3 className="mb-0  info__value">{lokalData[0].name}</h3>
			                <p className="mb-0  info__text--lokal">{lokalData[0].positif} POSITIF, {lokalData[0].sembuh} SEMBUH, {lokalData[0].meninggal} MENINGGAL</p>
			              </div>
			              <div className="info__right">
			                <Image src={inaFlag} className="info__photo"/>
			              </div>
			          </Card.Body>
			      </Card>)
				}
				</Col>
			</Row>
		)
	}
}


const mapsStateToProps = createStructuredSelector<IRootStore,Props>({
	globalData:state => globalData.selectDataSummary(state.globalData),
	lokalData:state => localData.selectDataSummary(state.lokalData)
})

export default connect(mapsStateToProps)(Info);
