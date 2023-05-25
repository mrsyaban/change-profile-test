import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { TitleProvider } from './contexts/title.context';

import './index.scss';

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <BrowserRouter>
      <TitleProvider>
        <div className='handphone'>
          <App/>
        </div>
      </TitleProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

