import { Layout, Menu, Divider, Button, Skeleton } from "antd";

const { Header, Footer, Content } = Layout;

const LandingPageLayout = ({children}) => {
    return (
        <Layout>
            <Header style={{display: "flex", justifyContent: "space-between"}}>
                <div style={{ flex: 1 }}>
                    <div style={styles.logo} ></div>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">Home</Menu.Item>
                        <Menu.Item key="2">About Us</Menu.Item>
                        <Menu.Item key="3">Contact Us</Menu.Item>
                    </Menu>
                </div>
                <div>
                    <Button type="primary">Sign In</Button>
                </div>
            </Header>
            <Content>
                {children}
            </Content>
            <Footer style={{ textAlign: 'center' }}>ZUUPEE Design ©2018 Crafted with Love by Mohsin Shaikh</Footer>
        </Layout>
    );
}

const styles = {
    logo: {
        float: "left",
        width: "120px",
        height: "31px",
        margin: "16px 24px 16px 0",
        background: "rgba(255, 255, 255, 0.3)",
    },
}


export default LandingPageLayout;