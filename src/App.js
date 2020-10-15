import React, { createContext, useState } from 'react';
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
import CustomerServiceList from './components/CustomerDashboard/CustomerServiceList/CustomerServiceList';
import AdminControlServices from './components/AdminDashboard/AdminControlServices/AdminControlServices';
import AddService from './components/AdminDashboard/AddService/AddService';
import MakeAdmin from './components/AdminDashboard/MakeAdmin/MakeAdmin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Sidebar from './components/Shared/Sidebar/Sidebar';


export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path={["/home", "/"]}>
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard">
            <Sidebar />
          </PrivateRoute>

          <PrivateRoute path="/customer/order">
            <CustomerOrder />
          </PrivateRoute>
          <PrivateRoute path="/customer/review">
            <CustomerReview />
          </PrivateRoute>
          <PrivateRoute path="/customer/service">
            <CustomerServiceList />
          </PrivateRoute>

          <PrivateRoute path="/admin/controlService">
            <AdminControlServices />
          </PrivateRoute>
          <PrivateRoute path="/admin/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/admin/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
