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
    getItem("Мета", "meta", "/mockup", undefined,),
    getItem("Контент", "content", "/mockup", undefined),
    getItem("Темы", "themes", "/mockup", undefined, ),
    getItem("Шаблоны", "templates", "/mockup", undefined),
];
const DropdownMenu = () => (
    <Dropdown key="more" overlay={<div>Menu</div>} placement="bottomRight">
        <Button type="text" icon={<MoreOutlined style={{ fontSize: 20 }} />} />
    </Dropdown>
);

function App() {
    const [menu, setMenu] = useState<string>("content")
  return (
      <BrowserRouter>
          <div style={{display: "flex", width: '100%'}}>
              <div className="logo" style={{width: 250, padding: 10}}>Reserved for LOGO</div>
              <Menu style={{width: "100%"}} onClick={(v)=>setMenu(v.key)} selectedKeys={[menu]} mode="horizontal" items={topMenu} />
              <div style={{display: "flex", padding: 10}}><Avatar src="https://joeschmoe.io/api/v1/random" />
                  <Button key="3">Выход</Button>
                  <DropdownMenu key="more" /></div>
          </div>
          <Routes>
              <Route path="/" element={<Page />} />
              <Route path="/mockup" element={<Page />} />
              {/*<Route path="/products" element={<ProductsPage />} />*/}
              {/*<Route path="/dashboard" element={<DashboardPage />} />*/}
              {/*<Route path="/orders" element={<OrdersPage />} />*/}
              {/*<Route path="/setting" element={<SettingPage />} />*/}
          </Routes>
                  <Footer style={{ textAlign: "center" }}>
                      Design Mockup ©2022
                  </Footer>
      </BrowserRouter>
  );
}

export default App;
