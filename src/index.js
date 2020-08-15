import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { IntlProvider, addLocaleData } from 'react-intl-redux';
import { IntlProvider, addLocaleData } from "react-intl";
import ptLocaleData from 'react-intl/locale-data/pt';
import esLocaleData from "react-intl/locale-data/es";
import enLocaleData from "react-intl/locale-data/en";

import {getLocale, getMessages} from './core/utils/getLanguage';
import configureStore from './core/store/configureStore';
import App from './app/App';

import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import './index.scss';
import 'antd/dist/antd.css';

addLocaleData([...ptLocaleData, ...esLocaleData, ...enLocaleData])

const initialState = {
  intl: {
    locale: getLocale(),
    messages: getMessages()
  }
};

window.currentMessages = getMessages();

const store = configureStore();

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <IntlProvider locale={initialState.intl.locale} messages={initialState.intl.messages}> 
        <App />
      </IntlProvider>
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);