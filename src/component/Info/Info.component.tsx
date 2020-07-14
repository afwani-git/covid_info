import React from "react";
import { connect } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import { IRootStore } from "../../redux/root.interface";
import { IGlobalDataState, IglobalData } from "../../redux/globalData/globalData.interface";
import { ILocalDataState } from "../../redux/lokalData/lokalData.interface";
import InfoCard from "../InfoCard/InfoCard.component";
import { instanceOfA } from "../../module/helper";
import recoveredPhoto from "../../asset/happy-ipM.png";
import deathPhoto from "../../asset/death.png"
import postitfPhoto from "../../asset/sad.png";

interface Props{
	globalData?:IGlobalDataState,
	lokalData?:ILocalDataState
}


class Info extends React.Component<Props>{
	renderTemplate = () => {
		const bgColor: string[] = ["red","green","purple"];
		const photo: string[] = [postitfPhoto,recoveredPhoto,deathPhoto];
		if(this.props.globalData){
			const { dataSummary } = this.props.globalData
			if(!instanceOfA(dataSummary)){
				return dataSummary.map((_data: IglobalData,index) => {
					return(
						<Col sm={12} md={6} lg={6} xl={3}>
							<InfoCard key={index} {..._data} bgColor={bgColor[index]} photo={photo[index]} />
						</Col>
					)
				})
			}
		}
	}

	render(){
		const { lokalData } = this.props;
		return(
			<Row>
				{this.renderTemplate()}
				<Col sm={12} md={6} lg={6} xl={3}>
				{
					lokalData && "sembuh" in lokalData.locaLData ?
					<InfoCard {...lokalData.locaLData} />:""
				}
				</Col>
			</Row>
		)
	}
}


const mapsStateToProps = ({ globalData, lokalData }:IRootStore):Props => ({
	globalData,
	lokalData,
})

export default connect(mapsStateToProps)(Info);
