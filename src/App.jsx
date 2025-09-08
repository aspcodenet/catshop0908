import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import { Home } from './components/Home'
import { Products } from './components/Products'
import Contact from './components/Contact'
import { SingleProduct } from './components/SingleProduct'

function Layout() {
  return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
  );
}


const router = createBrowserRouter([
  {
    element: <Layout/>,
    errorElement: <div>FEL</div>,    
    children:[
        {
          path:'/catshop0908/',
          element:<Home></Home>,
        },
        {
          path:'/catshop0908/products',
          element: <Products></Products>,
        },
        {
          path:'/catshop0908/contact',
          element: <Contact></Contact>,
        },
        {
          path:'/catshop0908/product/:id',
           element: <SingleProduct></SingleProduct>,
         }
    ]
  }
])


function App() {

  return (
    <>
    <RouterProvider router={router}>

    </RouterProvider>
    </>
  )
}

export default App
