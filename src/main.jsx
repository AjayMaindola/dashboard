import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ViewColor from './Pages/ViewColor.jsx'
import DashBoard from './Pages/DashBoard.jsx'
import Login from './Pages/Auth/Login.jsx'
import Profile from './Pages/Profile.jsx'
import RootLayout from './RootLayout.jsx'
import SizeDetails from './Pages/SizeDetails.jsx'
import ViewSize from './Pages/ViewSize.jsx'

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
        element:<ViewColor/>
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
     
    
    ]
  }
]
)

createRoot(document.getElementById('root')).render(
  
   <RouterProvider router={allrouter} />
  
)
// https://admin-panel-github-io.vercel.app/