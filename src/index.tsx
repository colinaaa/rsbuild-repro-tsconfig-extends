import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { foo, p } from './foo';

console.log(foo(42))
console.log(p)

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
