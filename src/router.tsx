import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage, Root } from '@/common/components';
import {
  Blog,
  Cart,
  Checkout,
  Comparison,
  Contact,
  Home,
  Product,
  Shop,
} from './pages';

// eslint-disable-next-line no-shadow
export enum MenuLink {
  HOME = '/',
  SHOP = 'shop?page=1&view=grid&show=8&sortBy=default',
  BLOG = 'blog',
  CONTACT = 'contact',
}

export default createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'shop',
        children: [
          {
            index: true,
            element: <Shop />,
          },
          {
            path: 'comparison',
            element: <Comparison />,
          },
          {
            path: 'cart',
            children: [
              {
                index: true,
                element: <Cart />,
              },
              {
                path: 'checkout',
                element: <Checkout />,
              },
            ],
          },
          {
            path: ':productId',
            element: <Product />,
          },
        ],
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);
