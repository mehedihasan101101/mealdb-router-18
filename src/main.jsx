import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import Home from './components/Home.jsx'
import SingleItemPage from './components/category/singleItemPage.jsx';
import Starter from './components/category/Starter.jsx';



const router = createBrowserRouter([
  {
    path: '/mealdb-router-18',
    element: <App></App>,
    children: [

      {
        path: "",
        element: <Home></Home>,
        children: [
          {
            index: true,
            element: <Navigate to="starter" replace />
          },
          // all child pages
          {
            path: ":categoryname",
            loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryname}`),
            element: <Starter></Starter>
          },
        ]
      },
      {
        path: ":categoryname/:itemId",
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.itemId}`),
        element: <SingleItemPage></SingleItemPage>
      }

    ]
  }

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
