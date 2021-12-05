import { useState } from 'react';
import { Layout, Divider, Button } from "antd";
import { 
    DisconnectOutlined,
    FundProjectionScreenOutlined,
    EllipsisOutlined,
    MessageOutlined,
    TeamOutlined
} from '@ant-design/icons';
import Timer from "../../components/Timer";
import Mic from "../../components/Mic";
import Video from "../../components/Video";
import SearchInput from "../../components/SearchInput";
import ScreenShare from "../../components/ScreenShare";

const { Header, Content, Sider } = Layout;

const MeetingPage = () => {
    const [teamCollapsed, setTeamCollapsed] = useState(true);
    const [chatCollapsed, setChatCollapsed] = useState(true);

    return (
        <Layout style={{height: "100%"}}>
            <Header style={{ display: "flex", justifyContent: "space-between", "column-gap": "10px" }}>
                <div style={styles.timing}><Timer /></div>
                <div>
                    <Button 
                        type="text" 
                        icon={<TeamOutlined />} 
                        style={styles.colorWhite}
                        onClick={() => setTeamCollapsed(!teamCollapsed)}
                    ></Button>
                </div>
                <div>
                    <Button 
                        type="text" 
                        icon={<MessageOutlined />} 
                        style={styles.colorWhite}
                        onClick={() => setChatCollapsed(!chatCollapsed)}
                    ></Button>
                </div>
                <div>
                    <Button 
                        type="text" 
                        icon={<EllipsisOutlined />} 
                        style={styles.colorWhite}
                    ></Button>
                </div>
                <div>
                    <Divider type="vertical" style={styles.divider} />
                </div>
                <div>
                    <Video />
                </div>
                <div>
                    <Mic />
                </div>
                <div>
                    <Button 
                        type="text" 
                        icon={<FundProjectionScreenOutlined />} 
                        style={styles.colorWhite}>
                    </Button>
                </div>
                <div>
                    <Button type="danger" icon={<DisconnectOutlined />}>Leave</Button>
                </div>
            </Header>
            <Layout>
                <Content>
                    <ScreenShare />
                </Content>
                <Sider 
                    trigger={null} 
                    collapsible 
                    collapsed={teamCollapsed} 
                    collapsedWidth="0"
                    width="250px"
                    theme="light"
                >
                    <div style={{ padding: "5px" }}>
                        <Divider>Search</Divider>
                        <SearchInput />
                        <Divider>People</Divider>
                    </div>
                </Sider>
                <Sider 
                    trigger={null} 
                    collapsible 
                    collapsed={chatCollapsed} 
                    collapsedWidth="0"
                    width="250px"
                    theme="light"
                >
                    <div style={{ padding: "5px" }}>
                        <Divider>Meeting Chat</Divider>
                    </div>
                </Sider>
            </Layout>
            <style global jsx>{`
                html,
                body,
                body > div:first-child,
                div#__next,
                div#__next > div {
                height: 100%;
                }
            `}</style>
        </Layout>
    );
}

const styles = {
    timing: {
        flex: 1,
        color: "#fff",
    },
    divider: {
        "border-color": "#fff",
        height: "40%",
    },
    colorWhite: {
        color: "#fff",
    }
}


export default MeetingPage;