import React from 'react';
import { render, waitForElement, getByTestId } from '@testing-library/react';
import { Provider } from 'react-redux';
import { IntlProvider } from "react-intl";
import configureStore from 'redux-mock-store';

import Promotion from './promotion';

import Http from '../../core/services/repository';
import {getLocale, getMessages} from '../../core/utils/getLanguage';
import { history } from '../../core/store/configureStore';

const initialState = {
  history,
  data: []
};
const middlewares = []
const mockSore = configureStore(middlewares);
const store = mockSore(initialState);

test('renders learn react link', async () => {

  const props = {
    history
  }

  const { getByText, getByTestId } = render(
    <Provider store={store}>
      <IntlProvider locale={getLocale()} messages={getMessages()}> 
        <Promotion {...props}/>
      </IntlProvider>
    </Provider>,  
  );

  const manuAll = await waitForElement(()=> getByTestId('menu-all'));
  const manuEx = await waitForElement(()=> getByTestId('menu-exclusivo'));
  const manuProm = await waitForElement(()=> getByTestId('menu-promocao'));
  const manuFav = await waitForElement(()=> getByTestId('menu-favorito'));
  const manuFoot = await waitForElement(()=> getByTestId('menu-footer'));

  expect(getByText(/Listagem de produtos - clique no produto desejado para saber mais/i)).toBeInTheDocument();
  expect(getByText(/Empresa -XPTO/i)).toBeInTheDocument();
  expect(getByText(/Nenhum resultado encontrado/i)).toBeInTheDocument();
  
});
