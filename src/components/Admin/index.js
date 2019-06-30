import React from 'react'
import AdminPage from './AdminPage';
import Signin from './Signin';
import { BrowserRouter as Router, Route } from "react-router-dom";


const AdminApp = () => (
   <Router>
      <Route path="/admin" exact component={AdminPage} />
      <Route path="/admin/login" component={Signin} />
   </Router>
)

export default AdminApp;
      
