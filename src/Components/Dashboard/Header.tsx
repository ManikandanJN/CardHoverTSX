import React from 'react'
import { Layout, Row, Col } from "antd";
import SearchBar from './SearchBar';
import CreateWorkflow from './CreateWorkflow';
//import cardDetails from '../Content/CardData';

const { Header } = Layout;

// function HeaderPart({refresh}) {

// HeaderPart Main function 
  export default ({refresh, searchCardCallBack}:any) => {

      return (
        <Header>
            <Row className="rowhead">
            <Col span={6}>
                <p className="lefthead">Workflow</p>
            </Col>
                <SearchBar searchCardCallBack={searchCardCallBack} />
                <CreateWorkflow refresh={refresh} />
            </Row>
      </Header>
      )
}

//export default HeaderPart;