import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { IglobalData } from "../../redux/globalData/globalData.interface";
import { ILocalData } from "../../redux/lokalData/lokalData.interface";
import "./InfoCard.style.scss";

interface costumeProps extends IglobalData{
  bgColor?:string;
  photo?:string;
}

type Props = costumeProps | [ILocalData];

const InfoCard:React.FC<Props> = (props: Props) => {
  return(
    <React.Fragment>
      {
       ("value" in props) ?
        <Card className={`info info--${props.bgColor}`}>
            <Card.Body className="d-flex justify-content-around align-content-center card-body info__body">
              <div className="info__left">
                <p className="mb-0  info__text">{props.name}</p>
                <h3 className="mb-0  info__value">{props.value}</h3>
                <p className="mb-0  info__text">ORANG</p>
              </div>
              <div className="info__right">
                <Image src={props.photo} className="info__photo"/>
              </div>
            </Card.Body>
        </Card>
      :
      "load"
    }
    </React.Fragment>
  )
}


export default InfoCard;
