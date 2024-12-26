import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Hero from './Components/Hero';
import Team from './Components/Team';
import Feature from './Components/Feature';
import Blog from './Components/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Hero />
      },
      {
        path: "team",
        element: <Team />
      },
      {
        path: "feature",
        element: <Feature />
      },
      {
        path: "blog",
        element: <Blog />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
