import React from 'react'
import { Layout, Menu } from "antd";
import Images from './ImagePath';

const { Sider } = Layout;

//Sidenav Main Function
// function Sidenav(props:Images) {
export default () => {
  return (
    <Sider className="SideBar" 
    breakpoint="sm"
    collapsedWidth="0"
    width={61}
    // onBreakpoint={broken => {
    //   console.log(broken);
    // }}
    // onCollapse={(collapsed, type) => {
    //   console.log(collapsed, type);
    // }}
    >
     
          <div className="Logo">
            <img src={Images.L1} />
          </div>
          <Menu theme="light" mode="inline" defaultSelectedKeys={["4"]} className="midicon">
                <Menu.Item>
                  <img src={Images.L2} />
                </Menu.Item>
                <Menu.Item>
                  <img src={Images.L3} />
                </Menu.Item>
                <Menu.Item>
                  <img src={Images.L4} className="midicon3" />
                </Menu.Item>
                <Menu.Item>
                  <img src={Images.L5} />
                </Menu.Item>
                <Menu.Item>
                  <img src={Images.L6} />
                </Menu.Item>
          </Menu>
          <div className="boticon">
            <img src={Images.L7} />
            <img src={Images.L8} />
            <img src={Images.L9} />
          </div>
        </Sider>
  )
}

// export default Sidenav