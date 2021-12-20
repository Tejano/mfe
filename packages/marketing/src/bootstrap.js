import App from './App';
import React from 'react';
import ReactDom from 'react-dom';
// Mount function to start-up marketing
const mount = (el) => {
  ReactDom.render(<App />, el);
};
//If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through the container
// and we should export the mount function
export { mount };
