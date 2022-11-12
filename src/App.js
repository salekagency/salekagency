
import './App.css';
import {Image, Layout} from 'antd';
import AppRoutes from '../src/components/AppRoutes'
import SideMenu from './components/SideMenu';
import logo from './log.png'

const {Sider, Content,Footer} = Layout;

function App() {
  return (
    <div className="App"> 
      <Layout>

<Layout>
  <Content>
    <AppRoutes/>
  </Content>
  <Footer style={{ textAlign: "center" }}>
    <h1> Salek 2022</h1>
  </Footer>
</Layout>

<Sider style={{ height: "100vh", backgroundColor: "#93c5fd" }} >
<Image
    className='w-fill'
    src={logo}
  />
<SideMenu/>
</Sider>
      </Layout>
    </div>
  );
}

export default App;
