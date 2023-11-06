import * as React from 'react'
import * as ReactDOM from "react-dom/client";
import {Provider} from 'react-redux';
import {
  createBrowserRouter,
  matchRoutes,
  RouterProvider,
} from "react-router-dom";
import configureStore, {defaultState} from './redux/configureStore'
import {routes} from "./components/app";
import "./index.css";

hydrate();

async function hydrate() {
  type XWindow = Window & typeof globalThis & {__STATE__: any};
  // Read the state sent with markup
  let state = (window as XWindow).__STATE__ || {};

  if (Object.keys(state).length == 0) {
    state = defaultState;
  }

  console.log('state', state);
  // delete the state from global window object
  delete (window as XWindow).__STATE__;

  // reproduce the store used to render the page on server
  const store = configureStore(state);

  let lazyMatches = matchRoutes(routes, window.location)?.filter(
    (m) => m.route.lazy
  );

  if (lazyMatches && lazyMatches?.length > 0) {
    await Promise.all(
      lazyMatches.map(async (m) => {
        let routeModule = await m.route.lazy!();
        Object.assign(m.route, { ...routeModule, lazy: undefined });
      })
    );
  }

  let router = createBrowserRouter(routes);

  ReactDOM.hydrateRoot(
    document.querySelector('#root')!,
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} fallbackElement={null} />
      </Provider>
    </React.StrictMode>,
  )
}
