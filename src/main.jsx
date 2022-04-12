import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthProvider from './context/authContext';
import RestaurantsProvider from './context/restaurantsContext';
import BlogsProvider from './context/blogsContext';
import CouponsProvider from './context/couponContext';
import MembershipsProvider from './context/membershipContext';
import AgentsProvider from './context/deliveryContext';
import ExpenseProvider from './context/expensesContext';
import AdminProvider from './context/adminContext';
import WarehouseProvider from './context/warehouseContext';
import OrdersProvider from './context/ordersContext';
import TaxProvider from './context/taxContext';

ReactDOM.render(
  <AuthProvider>
    <AdminProvider>
      <RestaurantsProvider>
        <BlogsProvider>
          <CouponsProvider>
            <MembershipsProvider>
              <AgentsProvider>
                <TaxProvider>
                  <ExpenseProvider>
                    <WarehouseProvider>
                      <OrdersProvider>
                        <React.StrictMode>
                          <App />
                        </React.StrictMode>
                      </OrdersProvider>
                    </WarehouseProvider>
                  </ExpenseProvider>
                </TaxProvider>
              </AgentsProvider>
            </MembershipsProvider>
          </CouponsProvider>
        </BlogsProvider>
      </RestaurantsProvider>
    </AdminProvider>
  </AuthProvider>,
  document.getElementById('root')
);
