import type * as express from "express";
import { Headers } from 'node-fetch';
import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { matchRoutes } from 'react-router-config';
import {
  createStaticHandler,
  createStaticRouter,
  StaticHandlerContext,
  StaticRouterProvider,
} from "react-router-dom/server";
import configureStore from '../frontend/redux/configureStore'
import {routes} from '../frontend/components/app'
import data from '../modules/data';

let initialState = {
  isFetching: false,
  apps: data
}

export const renderSSR = async (request, response, data) => {
  let { query, dataRoutes } = createStaticHandler(routes);
  let remixRequest = createFetchRequest(request);
  let context = await query(remixRequest);
  
  if (context instanceof Response && [301, 302, 303, 307, 308].includes(context.status)) {
    return response.redirect(context.status, context.headers.get("Location"));
  }
  
  let router = createStaticRouter(dataRoutes, (context as StaticHandlerContext));
  const store = configureStore(initialState)
  // console.log('These Components needs rendering : \n', matchRoutes(routes, request.path))
  // const componentsDataPromises = matchRoutes(routes, request.path)
  //   .map(({ route }) => {
  //     return route.loadData ? route.loadData(store) : null;
  //   }).map(promise => {
  //     if (promise) {
  //       return new Promise((resolve, reject) => {
  //         promise.then(resolve).catch(resolve);
  //       });
  //     }
  //   });

  // Promise.all(componentsDataPromises)
  //   .then(() => {
  //     let staticRouterContext: { notFound?: boolean; url?: string } = {};

  // render the App store static markup ins content variable
  let content = renderToString(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouterProvider
          router={router}
          context={(context as StaticHandlerContext)}
          nonce="the-nonce"
        />
      </Provider>
    </React.StrictMode>
  );

  // Get a copy of store data to create the same store on client side 
  const preloadedState = store.getState();
  data = data.replace(/{\/\*__STATE__\*\/}/, JSON.stringify(preloadedState));
  data = data.replace(/<!--%__CONTENT__%-->/, content);

  // if (context.url) {
  //   return response.redirect(301, context.url)
  // }

  // if (context.notFound) {
  //   console.log('Not Found ', context.notFound)
  //   response.status(404);
  // }

  return response.send(data);
}

export function createFetchRequest(req: express.Request): Request {
  let origin = `${req.protocol}://${req.get("host")}`;
  // Note: This had to take originalUrl into account for presumably vite's proxying
  let url = new URL(req.originalUrl || req.url, origin);

  let controller = new AbortController();
  req.on("close", () => controller.abort());

  ///node_modules/@types/node/globals.d.ts
  let headers = new Headers();

  for (let [key, values] of Object.entries(req.headers)) {
    if (values) {
      if (Array.isArray(values)) {
        for (let value of values) {
          headers.append(key, value);
        }
      } else {
        headers.set(key, values);
      }
    }
  }

  let headersInit: HeadersInit = {...headers, getSetCookie: ''};
  let init: RequestInit = {
    method: req.method,
    headers: headersInit,
    signal: controller.signal,
  };

  if (req.method !== "GET" && req.method !== "HEAD") {
    init.body = req.body;
  }

  return new Request(url.href, init);
}

