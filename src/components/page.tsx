import {
    Card,
    Col,
    Layout,
    Menu,
    PageHeader,
    Row,
    Tabs,
    Image,
    Drawer,
    Checkbox,
    Form,
    Input,
    Select
} from "antd";
import React, {useCallback, useState} from "react";
import { SettingOutlined, EditOutlined,EllipsisOutlined, DeleteOutlined, FolderAddOutlined, UploadOutlined, MenuUnfoldOutlined, SortAscendingOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
const { Content, Sider } = Layout;

const { Meta } = Card;
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
    getItem("Каталог D1", "d1", "/content", undefined,[
        getItem("Лобня", "lobnya", "/content", undefined, [
            getItem("Парк_1", "park_1", "/content"),
            getItem("Парк_2", "park_2", "/content"),
            getItem("Стадион", "stadion", "/content"),
            getItem("Университет", "university", "/content"),
            getItem("Церковь", "cherch", "/content"),
        ]),
        getItem("Марк", "8", "/content"),
        getItem("Одинцово", "8", "/content"),
    ]),
    getItem("Каталог D2", "d2", "/content", undefined),
    getItem("Каталог D3", "d3", "/content", undefined, ),
    getItem("Видеоролики", "videos", "/content", undefined),
    getItem("Пиктограммы", "pictograms", "/content", undefined),
    getItem("Удаленные", "deleted", "/content", <DeleteOutlined />),
];
const routes = [
    {
        path: 'index',
        breadcrumbName: 'Каталог D1',
    },
    {
        path: 'first',
        breadcrumbName: 'Лобня',
    },
];
const Page: React.FC = () => {
    const [opened, setOpened] = useState<boolean>(false);
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const collapseHandler = useCallback(() => {
        setCollapsed((prev) => !prev);
    }, []);
    return <Layout style={{minHeight: "100vh"}}>
        <Sider collapsible collapsed={collapsed} onCollapse={collapseHandler}>
            <Menu theme="dark" defaultSelectedKeys={["lobnya"]} defaultOpenKeys={["d1", "lobnya"]} mode="inline">
                {items.map((i) => {
                    if (i.children) {
                        return (
                            <Menu.SubMenu title={i.label} key={i.key}>
                                {i.children.map((ch) => {
                                    if (ch.children){
                                        return (
                                            <Menu.SubMenu title={ch.label} key={ch.key}>
                                                {ch.children.map((ch) => {
                                                    return (
                                                        <Menu.Item key={ch.key}>
                                                            <Link to={ch.path}>{ch.label}</Link>
                                                        </Menu.Item>
                                                    );
                                                })}
                                            </Menu.SubMenu>
                                        );
                                    }
                                    return (
                                        <Menu.Item key={ch.key}>
                                            <Link to={ch.path}>{ch.label}</Link>
                                        </Menu.Item>
                                    );
                                })}
                            </Menu.SubMenu>
                        );
                    }
                    return (
                        <Menu.Item key={i.key}>
                            {i.icon && <span style={{marginRight: 5}}>{i.icon}</span>}<Link to={i.path}>{i.label}</Link>
                        </Menu.Item>
                    );
                })}
            </Menu>
        </Sider>
        <Content style={{margin: "0 10px"}}>
            <PageHeader
                title={<div style={{display: "flex", gap: 10}}>
                    <UploadOutlined />
                    <FolderAddOutlined/>
                    <MenuUnfoldOutlined />
                    <SortAscendingOutlined />
                </div>}
                breadcrumb={{routes}}
            />
            <Drawer title="Информация о файле" placement="right" onClose={()=>setOpened(!opened)} visible={opened}>
                <p>Тип: jpeg</p>
                <p>Размер: 1.4mb</p>
                <p>Разрешение: 160x160 (px)</p>
                <p>Создан: 08.07.2002 в 14:01</p>
                <p>Автор: Иванов Иван</p>
                <Form layout="vertical">
                    <Form.Item>
                        <Checkbox checked={true}>POI</Checkbox>
                        <Checkbox checked={false}>Пиктограмма</Checkbox>
                    </Form.Item>
                    <Form.Item label="Наименование RU">
                        <Input value="текст"/>
                    </Form.Item>
                    <Form.Item label="Наименование EN">
                        <Input value='text'/>
                    </Form.Item>
                    <Form.Item label="Описание RU">
                        <Input value='text'/>
                    </Form.Item>
                    <Form.Item label="Описание EN">
                        <Input value='text'/>
                    </Form.Item>
                    <Form.Item label="Тип пиктограммы">
                        <Select/>
                    </Form.Item>
                </Form>
            </Drawer>
            <div className="site-card-wrapper" style={{width: opened ? "calc(100% - 378px)" : "100%"}}>
                <Row gutter={16}>
                    <CardContent setOpened={setOpened} opened={opened}/>
                    <CardContent setOpened={setOpened} opened={opened}/>
                    <CardContent setOpened={setOpened} opened={opened}/>
                    <CardContent setOpened={setOpened} opened={opened}/>
                    <CardContent setOpened={setOpened} opened={opened}/>
                    <CardContent setOpened={setOpened} opened={opened}/>
                </Row>
            </div>
        </Content>
    </Layout>
}
export default Page

const CardContent:  React.FC<{setOpened: (v: boolean) => void, opened: boolean}> = ({setOpened,opened}) => {
    return <Col span={8}>
        <Card
            style={{margin: "5px 0"}}
            cover={
                <Image
                    src="error"
                    fallback="data:image/png;base64,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"
                />
            }
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" onClick={()=>setOpened(!opened)}/>,
                <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Meta
                title="Card title"
                description="This is the description"
            />
        </Card>
    </Col>
}