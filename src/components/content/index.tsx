import React, {useState} from "react";
import ContentMenu from "./components/menu";
import {Card, Checkbox, Col, Drawer, Form, Image, Input, PageHeader, Row, Select} from "antd";
import {
    EditOutlined, EllipsisOutlined,
    FolderAddOutlined,
    MenuUnfoldOutlined,
    SettingOutlined,
    SortAscendingOutlined,
    UploadOutlined
} from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";

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

const Content: React.FC = () => {
    const [opened,setOpened] = useState(false)
    return <div style={{display: "flex", flexDirection: "row"}}>
        <ContentMenu/>
        <div style={{margin: "0 10px"}}>
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
                    <CardContent setOpened={setOpened} opened={opened}/>
                    <CardContent setOpened={setOpened} opened={opened}/>
                    <CardContent setOpened={setOpened} opened={opened}/>
                    <CardContent setOpened={setOpened} opened={opened}/>
                    <CardContent setOpened={setOpened} opened={opened}/>
                    <CardContent setOpened={setOpened} opened={opened}/>
                    <CardContent setOpened={setOpened} opened={opened}/>
                    <CardContent setOpened={setOpened} opened={opened}/>
                    <CardContent setOpened={setOpened} opened={opened}/>
                    <CardContent setOpened={setOpened} opened={opened}/>
                    <CardContent setOpened={setOpened} opened={opened}/>
                    <CardContent setOpened={setOpened} opened={opened}/>
                </Row>
            </div>
        </div>
    </div>
}

export default Content

const CardContent:  React.FC<{setOpened: (v: boolean) => void, opened: boolean}> = ({setOpened,opened}) =>{
    const img = Math.random() > 0.5 ? "https://avatars.mds.yandex.net/get-images-cbir/1530721/CQeJX-bLvZVPFhGWkC6U_w902/ocr" : "data:image/jpeg;base64,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"
    return <Col span={4}>
        <Card
            hoverable
            style={{margin: "5px 0"}}
            cover={<div style={{display: "flex", justifyContent: "center", margin:"0 0 5px 0"}}>
                <Image
                    style={{height: 150}}
                    src={img}
                />
            </div>}
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