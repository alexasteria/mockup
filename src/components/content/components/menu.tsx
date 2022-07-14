import React, {useCallback, useState} from "react";
import {Menu} from "antd";
import {DeleteOutlined} from "@ant-design/icons";

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
const items: MenuItem[] = [
    getItem("Каталог D1", "d1", "/mockup", undefined,[
        getItem("Лобня", "lobnya", "/mockup", undefined, [
            getItem("Парк_1", "park_1", "/mockup"),
            getItem("Парк_2", "park_2", "/mockup"),
            getItem("Стадион", "stadion", "/mockup"),
            getItem("Университет", "university", "/mockup"),
            getItem("Церковь", "cherch", "/mockup"),
        ]),
        getItem("Марк", "8", "/mockup"),
        getItem("Одинцово", "8", "/mockup"),
    ]),
    getItem("Каталог D2", "d2", "/mockup", undefined),
    getItem("Каталог D3", "d3", "/mockup", undefined, ),
    getItem("Видеоролики", "videos", "/mockup", undefined),
    getItem("Пиктограммы", "pictograms", "/mockup", undefined),
    getItem("Удаленные", "deleted", "/mockup", <DeleteOutlined />),
];

const ContentMenu: React.FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const collapseHandler = useCallback(() => {
        setCollapsed((prev) => !prev);
    }, []);
    return <div className="menu" onMouseEnter={collapseHandler} onMouseLeave={collapseHandler}>
        <Menu
            defaultSelectedKeys={["lobnya"]}
            defaultOpenKeys={["d1", "lobnya"]}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
            items={items}
        />
    </div>
    {/*<Sider collapsible collapsed={collapsed} onCollapse={collapseHandler} >*/}
    {/*    <Menu inlineCollapsed={collapsed} theme="dark" defaultSelectedKeys={["lobnya"]} defaultOpenKeys={["d1", "lobnya"]} mode="inline">*/}
    {/*        {items.map((i) => {*/}
    {/*            if (i.children) {*/}
    {/*                return (*/}
    {/*                    <Menu.SubMenu title={i.label} key={i.key}>*/}
    {/*                        {i.children.map((ch) => {*/}
    {/*                            if (ch.children){*/}
    {/*                                return (*/}
    {/*                                    <Menu.SubMenu title={ch.label} key={ch.key}>*/}
    {/*                                        {ch.children.map((ch) => {*/}
    {/*                                            return (*/}
    {/*                                                <Menu.Item key={ch.key}>*/}
    {/*                                                    <Link to={ch.path}>{ch.label}</Link>*/}
    {/*                                                </Menu.Item>*/}
    {/*                                            );*/}
    {/*                                        })}*/}
    {/*                                    </Menu.SubMenu>*/}
    {/*                                );*/}
    {/*                            }*/}
    {/*                            return (*/}
    {/*                                <Menu.Item key={ch.key}>*/}
    {/*                                    <Link to={ch.path}>{ch.label}</Link>*/}
    {/*                                </Menu.Item>*/}
    {/*                            );*/}
    {/*                        })}*/}
    {/*                    </Menu.SubMenu>*/}
    {/*                );*/}
    {/*            }*/}
    {/*            return (*/}
    {/*                <Menu.Item key={i.key}>*/}
    {/*                    {i.icon && <span style={{marginRight: 5}}>{i.icon}</span>}<Link to={i.path}>{i.label}</Link>*/}
    {/*                </Menu.Item>*/}
    {/*            );*/}
    {/*        })}*/}
    {/*    </Menu>*/}
    {/*</Sider>*/}
}
export default ContentMenu