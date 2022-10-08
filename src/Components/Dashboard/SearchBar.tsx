import React, { useState } from 'react'
import { Col, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
//import Content from '../Content/Content';

export default ({searchCardCallBack}:any) => {

   //Search Cards
    const [search, setNewSearch] = useState("");
    //const [filtered, setFiltered] = useState([]);

    const handleSearchChange = (e:any) => {
        setNewSearch(e.target.value);
        let searchValue = e.target.value;
        let employeeDetail= JSON.parse(`${localStorage.getItem('employeeDetail') || '[]'}`);
          if(searchValue.length>2){
            let filteredValue = !searchValue
                    ? employeeDetail
                    : employeeDetail.filter((card:any) =>
                        card.title.toLowerCase().includes(searchValue.toLowerCase())
                        )
          searchCardCallBack(filteredValue);  
          }
        else if(searchValue.length<3){
          searchCardCallBack(employeeDetail);
        }
    }

  return (
  
        <Col span={12}className="midhead">
            <Input placeholder='Search a workflow' value={search} onChange={handleSearchChange} prefix={<SearchOutlined />} />
            {/* {filtered.map((card:any) => {
                return (
                //    <Content />
                  //console.log(card.title)
                );
              })} */}
        </Col>
  )
}
