import { createBrowserRouter, Navigate } from 'react-router-dom';

import Dashboard from 'views/Dashboard';
import Index from 'views/Index';
import Products from 'views/Products';
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
        children: [
          {
            path: 'add',
          },
          {
            path: ':id',
          },
          {
            path: 'edit/:id',
          },
        ],
      },
      {
        path: 'Orders',
        element: <Orders />,
      },
      {
        path: 'Users',
        element: <Users />,
      },
    ],
  },
]);
