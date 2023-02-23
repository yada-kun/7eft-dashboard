import { createBrowserRouter, Navigate } from 'react-router-dom';

import Dashboard from 'views/Dashboard';
import Index from 'views/Index';
import Products from 'views/Products';
import ProductDetails from 'views/ProductDetails';
import AddEditProduct from 'views/AddEditProduct';
import Orders from 'views/Orders';
import Users from 'views/Users';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/dashboard" />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: '',
        element: <Index />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'products/:id',
        element: <ProductDetails />,
      },
      {
        path: 'products/add',
        element: <AddEditProduct />,
      },
      {
        path: 'products/:id/edit',
        element: <AddEditProduct />,
      },
      //
      {
        path: 'Orders',
        element: <Orders />,
      },
      //
      {
        path: 'Users',
        element: <Users />,
      },
      //
      {
        path: '*',
        element: <Navigate to="/dashboard" />,
      },
    ],
  },
]);
