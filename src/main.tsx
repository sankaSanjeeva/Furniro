import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import router from '@/router';
import { store } from './redux/store';
import Toaster from './common/components/ui/sonner';
import './index.css';

async function enableMocking() {
  /**
   * mock service worker has been enabled in all modes since there isn't an actual backend
   */
  // if (process.env.NODE_ENV !== 'development') {
  //   return;
  // }

  const { worker } = await import('./mocks/browser');

  // eslint-disable-next-line consistent-return
  return worker.start({
    onUnhandledRequest(req, print) {
      if (new URL(req.url).pathname.startsWith('/src/assets')) {
        return;
      }

      print.warning();
    },
  });
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
      <Toaster position="bottom-left" />
    </React.StrictMode>
  );
});
