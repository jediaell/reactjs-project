import * as React from 'react';
import { createBrowserHistory } from 'history';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import { Toastify } from '~/utils';
import { ScrollToTop } from './components';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';
import store from './stores';
import { colors, radius, spacings } from './theme';
import GlobalStyle from './theme/global';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routingStore);
const theme = {
  ...colors,
  ...spacings,
  ...radius,
};

const stores = {
  ...store,
  routing: routingStore,
};

render(
  <ThemeProvider theme={theme}>
    <AppContainer>
      <Provider {...stores}>
        <Router history={history}>
          <Toastify.ToastContainer />
          <ScrollToTop>
            <StylesProvider injectFirst>
              <Routes />
            </StylesProvider>
            <GlobalStyle />
          </ScrollToTop>
        </Router>
      </Provider>
    </AppContainer>
  </ThemeProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
