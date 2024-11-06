import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Statistics from './pages/Statistics';
import ProductDetails from './components/ProductDetails';
import FAQs from './pages/FAQs';
import NotFound from './pages/NotFound';

import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import './index.css';
import App from './App';


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound/>,
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/product-details/:productId",
        element: <ProductDetails />,
        loader: ({ params }) => (
          fetch('/data.json')
            .then(response => response.json())
            .then(data => data.find(product => product.product_id === params.productId))
        )
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "FAQs",
        element: <FAQs />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound/>
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
);
