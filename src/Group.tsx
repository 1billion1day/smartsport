import {Col, Layout, Menu, Progress, Row, Space, Statistic, theme} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React from "react";
import Title from "antd/es/typography/Title";
import Card from "antd/es/card/Card";
import {Radar} from "@ant-design/charts";

export const Group = () => {
    const {
        token: {colorBgContainer, colorBgLayout},
    } = theme.useToken();
    const config = {
        meta: {
            score: {
                min: 0,
                max: 100
            },
        },
        xField: 'item', yField: 'score',
        style: {height: 240},
        area: {
            style: {
                opacity: 0.25,
            }
        }

    };
    return (
        <Layout>
            <Header style={{display: 'flex', alignItems: 'center'}}>
                <div style={{
                    color: 'white',
                }}>
                    智慧体育区域端管理平台
                </div>
            </Header>
            <Layout style={{background: 'black'}}>
                <Sider width={200} style={{backgroundColor: 'black', height: '100%'}}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{height: '100%', borderRight: 0, backgroundColor: 'black', color: 'white'}}
                        items={[
                            {
                                label: '整体数据分析',
                                key: '1',
                            },
                            {
                                label: '学生群体分析',
                                key: '2',
                            },
                            {
                                label: '教师表现分析',
                                key: '3',
                            },
                            {
                                label: '自定义查询',
                                key: '4',
                            },
                        ]}
                    />

                </Sider>
                <Layout>
                    <Content style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                        // height:'100%',
                        background: colorBgContainer
                    }}>
                        <Content>
                            <Title level={2}>
                                整体数据
                            </Title>
                            <Row gutter={16}>
                                <Col span={6}>
                                    <Card hoverable style={{backgroundColor: 'aliceblue'}}>
                                        <Statistic title="学校总数" value={20} suffix={'所'}/>
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card hoverable style={{backgroundColor: 'limegreen', color: 'white'}}>
                                        <Statistic title="学生总数" value={36780} suffix={'人'}/>
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card hoverable style={{backgroundColor: 'peachpuff'}}>
                                        <Statistic title="人均每周活动时长" value={312} suffix={'分钟'}/>
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card hoverable style={{backgroundColor: 'lightblue'}}>
                                        <Statistic title="数据更新时间" value={"2021-5-10 12:30"}/>
                                    </Card>
                                </Col>

                            </Row>
                        </Content>
                        <Layout style={{background: colorBgContainer}}>
                            <Content style={{background: colorBgContainer}}>
                                <Title level={3}>
                                    整体体能优良率
                                </Title>
                                <Row gutter={16}>
                                    <Col span={6}>
                                        <Card size="small" title="平衡" hoverable>
                                            <center>
                                                <Progress type="circle" percent={60} strokeWidth={12}
                                                          strokeColor={'green'}/>
                                            </center>
                                        </Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card size="small" title="协调" hoverable>
                                            <center>
                                                <Progress type="circle" percent={80} strokeWidth={12}
                                                          strokeColor={'green'}/>
                                            </center>
                                        </Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card size="small" title="心率" hoverable>
                                            <center>
                                                <Progress type="circle" percent={84} strokeWidth={12}
                                                          strokeColor={'green'}/>
                                            </center>
                                        </Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card size="small" title="力量" hoverable>
                                            <center>
                                                <Progress type="circle" percent={72} strokeWidth={12}
                                                          strokeColor={'green'}/>
                                            </center>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row gutter={16}>
                                    <Col span={6}>
                                        <Card size="small" title="耐力" hoverable>
                                            <center>
                                                <Progress type="circle" percent={55} strokeWidth={12}
                                                          strokeColor={'green'}/>
                                            </center>
                                        </Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card size="small" title="速度" hoverable>
                                            <center>
                                                <Progress type="circle" percent={90} strokeWidth={12}
                                                          strokeColor={'green'}/>
                                            </center>
                                        </Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card size="small" title="技术能力" hoverable>
                                            <center>
                                                <Progress type="circle" percent={95} strokeWidth={12}
                                                          strokeColor={'green'}/>
                                            </center>
                                        </Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card size="small" title="综合素质" hoverable>
                                            <center>
                                                <Progress type="circle" percent={80} strokeWidth={12}
                                                          strokeColor={'green'}/>
                                            </center>
                                        </Card>
                                    </Col>
                                </Row>
                                <Title level={3}>
                                    学校对比
                                </Title>

                                <Row gutter={16}>
                                    <Col span={8}>
                                        <Card size="small" title="第二实验中学">
                                            <Radar
                                                data={[
                                                    {item: '平衡', score: 70,},
                                                    {item: '协调', score: 60,},
                                                    {item: '力量', score: 60,},
                                                    {item: '耐力', score: 40,},
                                                    {item: '速度', score: 60,},
                                                ]}
                                                {...config}
                                            />
                                        </Card>
                                    </Col>
                                    <Col span={8}>
                                        <Card size="small" title="第二实验中学">
                                            <Radar
                                                data={[
                                                    {item: '平衡', score: 70,},
                                                    {item: '协调', score: 60,},
                                                    {item: '力量', score: 60,},
                                                    {item: '耐力', score: 40,},
                                                    {item: '速度', score: 60,},
                                                ]}
                                                {...config}
                                            />
                                        </Card>
                                    </Col>
                                    <Col span={8}>
                                        <Card size="small" title="第二实验中学">
                                            <Radar
                                                data={[
                                                    {item: '平衡', score: 70,},
                                                    {item: '协调', score: 60,},
                                                    {item: '力量', score: 60,},
                                                    {item: '耐力', score: 40,},
                                                    {item: '速度', score: 60,},
                                                ]}
                                                {...config}
                                            />
                                        </Card>
                                    </Col>
                                </Row>
                                <Row gutter={16}>
                                    <Col span={8}>
                                        <Card size="small" title="第二实验中学">
                                            <Radar
                                                data={[
                                                    {item: '平衡', score: 70,},
                                                    {item: '协调', score: 60,},
                                                    {item: '力量', score: 60,},
                                                    {item: '耐力', score: 40,},
                                                    {item: '速度', score: 60,},
                                                ]}
                                                {...config}
                                            />
                                        </Card>
                                    </Col>
                                    <Col span={8}>
                                        <Card size="small" title="第二实验中学">
                                            <Radar
                                                data={[
                                                    {item: '平衡', score: 70,},
                                                    {item: '协调', score: 60,},
                                                    {item: '力量', score: 60,},
                                                    {item: '耐力', score: 40,},
                                                    {item: '速度', score: 60,},
                                                ]}
                                                {...config}
                                            />
                                        </Card>
                                    </Col>
                                    <Col span={8}>
                                        <Card size="small" title="第二实验中学">
                                            <Radar
                                                data={[
                                                    {item: '平衡', score: 70,},
                                                    {item: '协调', score: 60,},
                                                    {item: '力量', score: 60,},
                                                    {item: '耐力', score: 40,},
                                                    {item: '速度', score: 60,},
                                                ]}
                                                {...config}
                                            />
                                        </Card>
                                    </Col>
                                </Row>
                            </Content>
                            <Sider style={{
                                background: colorBgContainer,
                                margin: "30px",
                            }}>
                                <Title level={4}>
                                    性别优良比例
                                </Title>
                                男生:
                                <Progress percent={70}/>
                                女生:
                                <Progress percent={82}/>
                                <Title level={4}>
                                    年纪优良比例
                                </Title>
                                <Title level={5}>
                                    高中
                                </Title>
                                高一:
                                <Progress percent={70}/>
                                高二:
                                <Progress percent={82}/>
                                高三:
                                <Progress percent={82}/>
                                <Title level={5}>
                                    初中
                                </Title>
                                初一:
                                <Progress percent={70}/>
                                初二:
                                <Progress percent={82}/>
                                初三:
                                <Progress percent={82}/>
                                <Title level={5}>
                                    小学
                                </Title>
                                小一:
                                <Progress percent={70}/>
                                小二:
                                <Progress percent={82}/>
                                小三:
                                <Progress percent={82}/>
                                小四:
                                <Progress percent={70}/>
                                小五:
                                <Progress percent={82}/>
                                小六:
                                <Progress percent={82}/>
                            </Sider>
                        </Layout>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}