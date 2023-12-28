import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProjectPage from './components/ProjectPage';
import About from './components/About';
import ContactPage, { contactInfo } from './components/ContactPage';
import Home from './components/Home';
import { connectionInfo } from './components/Footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/home', element: <Home /> },
      {
        path: '/project',
        element: <ProjectPage />,
        action: connectionInfo,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
        action: contactInfo,
        action: connectionInfo,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
