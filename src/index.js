import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './views/Home/Home';
import AddPlant from './views/AddPlant/AddPlant';

import { Toaster } from 'react-hot-toast';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path :"/",
    element :<Home/>
  },
 {
    path :"/add",
    element :<AddPlant/>
  },

  {
    path :"*",
    element :<h1>404 Not Found</h1>
  }

])
root.render((<div>
  <RouterProvider router={router}/>
  
  <Toaster/>
  </div>));
