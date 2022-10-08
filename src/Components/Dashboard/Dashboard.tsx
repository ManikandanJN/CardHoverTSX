import React, {useEffect, useState} from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { Col, Row } from "antd";
import "./Sidebar.css";
import Content from '../Content/Content';
//import cardDetails from '../Content/CardData';
import HeaderPart from "./Header";
import Sidenav from "./Sidenav";

//Dashboard Main Function
export default () => {

  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let employeeDetail= JSON.parse(`${localStorage.getItem('employeeDetail') || '[]'}`);
    setCardData(employeeDetail);
    setLoading(false);
  },[loading])

  const refresh = ()=>{
    setLoading(true);
  }

  const searchCardCallBack = (Data:any) =>{
    console.log('Hai Search: ',Data);
    setCardData(Data);
  }

  return (
    <div>
      <Layout>
        <Sidenav />
        <Layout>
          <div className="main_header">
              <HeaderPart refresh={refresh} searchCardCallBack={searchCardCallBack}/>
          </div>
              <div className="contentGrid">
                {cardData.map((card: any) => {
                  //console.log(card.title);
                  return(
                        <Row>
                          <Col span={6}>
                              <Content 
                                  refresh={refresh}
                                  id={card.id}
                                  title={card.title}
                                  cardImage={card.cardImage}
                                  description={card.description}
                                  card1paragraph={card.card1paragraph}
                                  card2paragraph={card.card2paragraph}
                              />
                          </Col>
                        </Row>
                        )
                   })}
              </div>
        </Layout>
      </Layout>
    </div>
  );
}
// export default Dashboard;
