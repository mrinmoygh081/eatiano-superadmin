import { useState, useContext } from 'react';
import Navbar from './components/UI/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ScrollToTop from './components/utilities/ScrollToTop';
import Error404 from './pages/Error404';
import Signin from './pages/Signin';
import { Auth } from './context/authContext';
import AllRestaurants from './components/restaurants/AllRestaurants';
import AddRestaurant from './components/restaurants/addRestaurant/AddRestaurant';
import EditRestaurant from './components/restaurants/editRestaurant/EditRestaurant';
import AllProducts from './components/products/AllProducts';
import AddProduct from './components/products/addProduct/AddProduct';
import EditProduct from './components/products/editProduct/EditProduct';
import AllBlogs from './components/blogs/AllBlogs';
import AddBlog from './components/blogs/addBlog/AddBlog';
import EditBlog from './components/blogs/editBlog/EditBlog';
import BlogDetails from './components/blogs/blogDetails/BlogDetails';
import AllCoupons from './components/coupons/AllCoupons';
import AddCoupon from './components/coupons/addCoupon/AddCoupon';
import EditCoupon from './components/coupons/editCoupon/EditCoupon';
import AllMemberships from './components/memberships/AllMemberships';
import AddMembership from './components/memberships/addMembership/AddMembership';
import EditMembership from './components/memberships/editMembership/EditMembership';
import AddDelivery from './components/delivery/addDelivery/AddDelivery';
import AllDeliveryAgents from './components/delivery/AllDeliveryAgents';
import AllExpenses from './components/expenses/AllExpenses';
import AddExpense from './components/expenses/addExpense/AddExpense';
import AllAdmin from './components/admin/AllAdmin';
import AddAdmin from './components/admin/addAdmin/AddAdmin';
import AllWarehouse from './components/warehouse/AllWarehouse';
import OtherStats from './components/otherStats/OtherStats';
import AllTaxes from './components/tax/AllTaxes';
import AddTax from './components/tax/addTax/AddTax';
import EditTax from './components/tax/editTax/EditTax';
import AgentDetails from './components/delivery/AgentDetails';

function App() {
  const authCtx = useContext(Auth);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <Router>
      <Navbar />
      <ScrollToTop>
        <Routes>
          {isLoggedIn && <Route path='/' element={<Dashboard />} />}
          {!isLoggedIn && <Route path='/signin' element={<Signin />} />}
          {!isLoggedIn && (
            <Route
              path='/'
              element={<Navigate replace={true} to='/signin' />}
            />
          )}
          {isLoggedIn && (
            <Route
              path='/signin'
              element={<Navigate replace={true} to='/' />}
            />
          )}
          <Route path='/restaurants' element={<AllRestaurants />} />
          <Route path='/blogs' element={<AllBlogs />} />
          <Route path='/coupons' element={<AllCoupons />} />
          <Route path='/admins' element={<AllAdmin />} />
          <Route path='/taxes' element={<AllTaxes />} />
          <Route path='/expenses' element={<AllExpenses />} />
          <Route path='/warehouses' element={<AllWarehouse />} />
          <Route path='/memberships' element={<AllMemberships />} />
          <Route path='/deliveryAgents' element={<AllDeliveryAgents />} />
          <Route path='/editRestaurant/:id' element={<EditRestaurant />} />
          <Route path='/editCoupon/:id' element={<EditCoupon />} />
          <Route path='/editProduct/:id' element={<EditProduct />} />
          <Route path='/editTax/:id' element={<EditTax />} />
          <Route path='/editBlog/:id' element={<EditBlog />} />
          <Route path='/editMembership/:id' element={<EditMembership />} />
          <Route path='/blogDetails/:id' element={<BlogDetails />} />
          <Route path='/restaurantProducts/:id' element={<AllProducts />} />
          {/* <Route path='/admin/warehouse/:id' element={<AdminWarehouse />} /> */}
          <Route path='/restaurantProducts/add/:id' element={<AddProduct />} />
          <Route path='/deliveryAgent/:id' element={<AgentDetails />} />
          {/* <Route path='/admin/warehouse/add/:id' element={<AddWarehouse />} /> */}
          <Route path='/restaurants/add' element={<AddRestaurant />} />
          <Route path='/expenses/add' element={<AddExpense />} />
          <Route path='/admin/add' element={<AddAdmin />} />
          <Route path='/deliveryAgents/add' element={<AddDelivery />} />
          <Route path='/coupons/add' element={<AddCoupon />} />
          <Route path='/blogs/add' element={<AddBlog />} />
          <Route path='/taxes/add' element={<AddTax />} />
          <Route path='/memberships/add' element={<AddMembership />} />
          <Route path='/otherStats' element={<OtherStats />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
