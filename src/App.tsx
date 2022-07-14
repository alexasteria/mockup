import React, {useState} from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Avatar, Button, Dropdown, Layout, Menu} from "antd";
import {MoreOutlined} from "@ant-design/icons";
const { Footer } = Layout;
import "./global.css"
import Content from "./components/content";

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

function App() {
    const [menu, setMenu] = useState<string>("content")
  return (
      <BrowserRouter>
          <div style={{display: "flex", width: '100%'}}>
              <div className="logo" style={{width: 250, padding: 10, display: "flex", justifyContent: "center", margin: "auto"}}><div style={{fontWeight: 700}}>МЦД</div></div>
              <Menu style={{width: "100%"}} onClick={(v)=>setMenu(v.key)} selectedKeys={[menu]} mode="horizontal" items={topMenu} />
              <div style={{display: "flex", padding: 10}}><Avatar src="https://joeschmoe.io/api/v1/random" />
                  <Dropdown key="more" overlay={<div><Button key="3">Выход 1</Button><Button key="4">Выход 2</Button></div>} placement="bottomRight">
                      <Button type="text" icon={<MoreOutlined style={{ fontSize: 20 }} />} />
                  </Dropdown></div>
          </div>
          <Routes>
              <Route path="/" element={<Content />} />
              <Route path="/mockup" element={<Content />} />
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
