import App from './App';
import React from 'react';
import ReactDom from 'react-dom';
import { createMemoryHistory, createBrowserHistory} from 'history';
// Mount function to start-up authentication
const mount = (el, { onSignIn,onNavigate ,defaultHistory,initialPath}) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath]
  });
  if (onNavigate) {
    history.listen(onNavigate);
  }
  ReactDom.render(<App onSignIn={onSignIn} history={history} />, el);
  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location
      if(pathname !== nextPathname){
        console.log(nextPathname);
        history.push(nextPathname);
      }
      
    },
  };
};
//If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root');
  if (devRoot) {
    mount(devRoot, {defaultHistory: createBrowserHistory()});
  }
}

// We are running through the container
// and we should export the mount function
export { mount };
