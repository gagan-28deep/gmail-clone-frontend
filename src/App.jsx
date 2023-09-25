import React , {Suspense , lazy} from 'react'
import './App.css'
// import Main from './pages/Main'

import { Navigate, Route , RouterProvider , createBrowserRouter , createRoutesFromElements} from 'react-router-dom'
import {routes} from "./routes/routes"
import ErrorComp from './components/common/ErrorComp'
// import SuspenseLoader from './components/common/SuspenseLoader'

const SuspenseLoader = lazy(()=>import('./components/common/SuspenseLoader'))


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path= {routes.main.path} element = {<Navigate to={`${routes.emails.path}/inbox`} />} />
        
        {/* This is main component with 2 children components */}
        {/* Main component -> full screen and children components are dynamic */}
        {/* Children components are also called outlets */}
        <Route path={routes.main.path} element = {<routes.main.element />}>
          {/* :type -> indicates that the value is dynamic(variable)  */}
          <Route path={`${routes.emails.path}/:type`} element = {<routes.emails.element />} errorElement = {<ErrorComp />} />
          <Route path={routes.view.path} element = {<routes.view.element />} errorElement = {<ErrorComp />} />
        </Route>

        <Route path={routes.invalid.path} element = {<Navigate to={`${routes.emails.path}/inbox`} />} />


    </Route>
  )
)
function App() {

  return (
    <Suspense fallback = {<SuspenseLoader />} >
      {/* <Main/> */}
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
