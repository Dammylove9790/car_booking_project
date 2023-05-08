import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import './style/utils.scss'
import { Provider } from 'react-redux';
import { store } from './App/store';
import RidePayment from './component/PassengerDB/Booking/RidePayment';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RidePayment />
    {/* <Provider store={store}>
      <App />
    </Provider> */}
  </React.StrictMode>
);
