import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import CustomerOrder from './components/CustomerDashboard/CustomerOrder/CustomerOrder';
import CustomerReview from './components/CustomerDashboard/CustomerReview/CustomerReview';
import DisplayServices from './components/CustomerDashboard/DisplayCustomeServices/DisplayCustomeServices';
import CustomerServiceList from './components/CustomerDashboard/CustomerServiceList/CustomerServiceList';
import AdminControlServices from './components/AdminDashboard/AdminControlServices/AdminControlServices';
import Dashboard from './components/Dashboard/Dashboard';
import AddService from './components/AdminDashboard/AddService/AddService';




function App() {

  return (
    <Router>
      <Switch>
        <Route exact path={["/home", "/"]}>
          <Home></Home>
        </Route>
        <Route path="/login">

        </Route>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>

        <Route path="/customer/order">
          <CustomerOrder></CustomerOrder>
        </Route>
        <Route path="/customer/review">
          <CustomerReview></CustomerReview>
        </Route>
        <Route path="/customer/service">
          <CustomerServiceList></CustomerServiceList>
        </Route>

        <Route path="/admin/addService">
          <AddService></AddService>
        </Route>

        <Route path="/admin/controlService">
          <AdminControlServices></AdminControlServices>
        </Route>
      </Switch>
    </Router>


  );
}

export default App;
