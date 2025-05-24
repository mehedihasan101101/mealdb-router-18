import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import Starter from './components/category/Starter.jsx';
import Seafood from './components/category/Seafood.jsx';
import Vegetarian from './components/category/Vegetarian.jsx';
import Side from './components/category/Side.jsx';
import Pasta from './components/category/Pasta.jsx';
import Dessert from './components/category/Dessert.jsx';

const router = createBrowserRouter([
  {
    path: '/mealdb-router-18',
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Navigate to="starter" replace />
      },
      {

        path: "starter",
        loader: () => fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=starter"),
        element: <Starter></Starter>
      },
      {
        path: "seafood",
        element: <Seafood></Seafood>
      },
      {
        path: "vegetarian",
        element: <Vegetarian></Vegetarian>
      },
      {
        path: "side",
        element: <Side></Side>
      },
      {
        path: "pasta",
        element: <Pasta></Pasta>
      },
      {
        path: "dessert",
        element: <Dessert></Dessert>
      }
    ]
  }

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
