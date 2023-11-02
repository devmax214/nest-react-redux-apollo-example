import type * as express from "express";
import { Headers, Request, Response } from 'node-fetch';
import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import {
  createStaticHandler,
  createStaticRouter,
  StaticHandlerContext,
  StaticRouterProvider,
} from "react-router-dom/server";
import configureStore from '../frontend/redux/configureStore'
import {routes} from '../frontend/components/app'

export const getSSRState = async (request, initialState) => {
  let { query, dataRoutes } = createStaticHandler(routes);
  let remixRequest = createFetchRequest(request);
  let context = await query(remixRequest);

  if (context instanceof Response) {
    throw context;
  }

  let router = createStaticRouter(dataRoutes, (context as StaticHandlerContext));
  const store = configureStore(initialState)

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
  const preloadedState = store.getState()

  return {content, preloadedState};
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

  let init: RequestInit = {
    method: req.method,
    headers,
    signal: controller.signal,
  };

  if (req.method !== "GET" && req.method !== "HEAD") {
    init.body = req.body;
  }

  return new Request(url.href, init);
}

