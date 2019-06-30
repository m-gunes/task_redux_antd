import React, { Component } from 'react'
import { Input, Layout } from 'antd';
import { connect } from 'react-redux';
import TreeMenu from '../Module/Tree'

const { Content, Sider } = Layout;


class Admin extends Component {
   componentDidMount() {
      const { isAuthenticated } = this.props.user;
      !isAuthenticated && this.props.history.replace('/admin/login')
   }
   render() {
      const { userInfo: { username } } = this.props.user;
      return (
         <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
               <TreeMenu />
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
               <Content
                  style={{
                     background: '#fff',
                     padding: 24,
                     margin: 0,
                     minHeight: 280,
                     minWidth: 400
                  }}
               >
                  Admin <Input placeholder="" value={username} style={{ width: '300px' }}/>
               </Content>
            </Layout>
         </Layout>
      )
   }
}

export default connect(
   state => ({ user: state.user })
)(Admin)






