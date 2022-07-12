import React, {useCallback, useState} from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {Avatar, Button, Dropdown, Layout, Menu, PageHeader} from "antd";
import Page from "./components/page";
import "./global.css"
import {MoreOutlined} from "@ant-design/icons";
const { Content, Footer, Sider } = Layout;

function getItem(
    label: React.ReactNode,
    key: React.Key,
    path: string,
    icon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        path,
    } as MenuItem;
}

type MenuItem = {
    label: string;
    key: string;
    path: string;
    icon: JSX.Element;
    children?: MenuItem[];
};

const topMenu: MenuItem[] = [
    getItem("Мета", "meta", "/meta", undefined,),
    getItem("Контент", "content", "/content", undefined),
    getItem("Темы", "themes", "/themes", undefined, ),
    getItem("Шаблоны", "templates", "/templates", undefined),
];
const DropdownMenu = () => (
    <Dropdown key="more" overlay={<div>Menu</div>} placement="bottomRight">
        <Button type="text" icon={<MoreOutlined style={{ fontSize: 20 }} />} />
    </Dropdown>
);

function App() {
  return (
      <BrowserRouter>
          <div style={{display: "flex", width: '100%'}}>
              <div className="logo" style={{width: 250, padding: 10}}>Reserved for LOGO</div>
              <Menu style={{width: "100%"}} onClick={()=>null} selectedKeys={["content"]} mode="horizontal" items={topMenu} />
              <div style={{display: "flex", padding: 10}}><Avatar src="https://joeschmoe.io/api/v1/random" />
                  <Button key="3">Выход</Button>
                  <DropdownMenu key="more" /></div>
          </div>
          <Routes>
              <Route path="/" element={<Page />} />
              <Route path="/lobnya" element={<Page />} />
              {/*<Route path="/products" element={<ProductsPage />} />*/}
              {/*<Route path="/dashboard" element={<DashboardPage />} />*/}
              {/*<Route path="/orders" element={<OrdersPage />} />*/}
              {/*<Route path="/setting" element={<SettingPage />} />*/}
          </Routes>
                  <Footer style={{ textAlign: "center" }}>
                      Design Mockup ©2022 Created by @alexasteria
                  </Footer>
      </BrowserRouter>
  );
}

export default App;
