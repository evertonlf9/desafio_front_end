import React from 'react';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import { IntlProvider } from "react-intl";
import App from './App';

import {getLocale, getMessages} from '../core/utils/getLanguage';
import configureStore from '../core/store/configureStore';

const store = configureStore();

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
    <IntlProvider locale={getLocale()} messages={getMessages()}> 
      <App />
    </IntlProvider>
  </Provider>
  );
  const linkElement = getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();
});
