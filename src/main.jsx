import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ViewColor from './Pages/ViewColor.jsx'
import DashBoard from './Pages/DashBoard.jsx'
import Profile from './Pages/Profile.jsx'
import RootLayout from './RootLayout.jsx'
import SizeDetails from './Pages/SizeDetails.jsx'
import ViewSize from './Pages/ViewSize.jsx'
import AddColor from './AddColor.jsx'
import AddCatgory from './AddCatgory.jsx'
import ViewCategory from './ViewCategory.jsx'
import AddSubCategory from './AddSubCategory.jsx'
import ViewSubCategory from './ViewSubCategory.jsx'
import ProductDetails from './ProductDetails.jsx'
import Login from './Pages/auth/Login.jsx'
import ProductItems from './ProductItems.jsx'
import StoryDetails from './StoryDetails.jsx'
import StoryView from './StoryView.jsx'
import Order from './Order.jsx'
import SliderDetails from './SliderDetails.jsx'
import SliderView from './SliderView.jsx'

let allrouter=createBrowserRouter(
  [
  {
    path:'/',
    element:<Login/>
  },
  {
    path:'/',
    element:<RootLayout/>,
    children:[
      {
        path:'/dashboard',
        element:<DashBoard/>,
      },
      {
        path:'/profile',
        element:<Profile/>,
      },
      {
        path:'/view-addcolor',
        element:<AddColor/>
      },
      {
        path:'/view-color',
        element:<ViewColor/>
      },
   
      {
        path:'/size-details',
        element:<SizeDetails/>
      },
      {
        path:'/size-view',
        element:<ViewSize/>
      },
      {
        path:'/add-category',
        element:<AddCatgory/>
      },
      {
        path:'/View-category',
        element:<ViewCategory/>
      },
      {
        path:'/add-subcategory',
        element:<AddSubCategory/>
      },
      {
        path:'/view-subcategory',
        element:<ViewSubCategory/>
      },
      {
        path:'/product-details',
        element:<ProductDetails/>
      },
      {
        path:'/product-items',
        element:<ProductItems/>
      },
      {
        path:'/story-details',
        element:<StoryDetails/>
      },  
      {
        path:'/story-view',
        element:<StoryView/>
      },
      {
        path:'/order-view',
        element:<Order/>
      },
      {
        path:'/slider-details',
        element:<SliderDetails/>
      },
      {
        path:'/slider-view',
        element:<SliderView/>
      },
     
     
     
    
    ]
  }
]
)

createRoot(document.getElementById('root')).render(
  
   <RouterProvider router={allrouter} />
  
)
// https://admin-panel-github-io.vercel.app/