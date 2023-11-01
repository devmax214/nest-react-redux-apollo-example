import React from 'react'
import {hydrate} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './redux/configureStore'
import App from './components/app'

type XWindow = Window & typeof globalThis & {__STATE__: string};
// Read the state sent with markup
const state = (window as XWindow).__STATE__;

// delete the state from global window object
delete (window as XWindow).__STATE__;

// reproduce the store used to render the page on server
const store = configureStore(state)

/**
 * hydrate the page to make sure both server and client
 * side pages are identical. This includes markup checking,
 * react comments to identify elements and more.
 */

hydrate(
  <Provider store={store} >
     <App />
  </Provider>,
  document.querySelector('#root')
)
