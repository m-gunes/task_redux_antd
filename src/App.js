import React from 'react';
import { Layout, Row, Button } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import AdminApp from './components/Admin';
import './style/App.css'

const { Header, Footer, Content } = Layout;

const Index = () => (
   <div className='entry-page'>
      <Button type="primary">
         <Link to="/home">User Giris</Link>
      </Button>
      <Button type="secondary">
         <Link to="/admin">Admin Giris</Link>
      </Button>
   </div>
)

const App = () => (
   <Layout style={{ minHeight: '100vh' }}>
      <Header>Header</Header>
      <Content style={{ padding: '0 24px', minHeight: 280 }}>
         <Row type="flex" justify="center" align="middle">
            <Router>
               <Route path="/" exact component={Index} />
               <Route path="/home" component={Home} />
               <Route path="/admin" component={AdminApp} />
            </Router>
         </Row>
      </Content>
      <Footer>Footer</Footer>
   </Layout>
);

export default App;
