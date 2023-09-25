import React , {Suspense, useState} from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Emails from '../components/Emails'
import { Outlet } from 'react-router-dom'
import SuspenseLoader from '../components/common/SuspenseLoader'
import { Box } from '@mui/material'

const Main = () => {
  // Open and close menu on button click
  const [open , setOpen] = useState(true)
  const handleToggle = async ()=>{
    setOpen(prevState => !prevState)
  }
  return (
    <>
      <Header handleToggle={handleToggle}/>
      <Box>
        <SideBar open = {open}/>
          
          {/* <Emails open = {open} /> */}
          
          {/* We wrapped outlets components in the suspense , as outlet components are lazy loaded */}
          <Suspense fallback = {<SuspenseLoader />}>
            <Outlet context={{open}} />
          </Suspense>
      </Box>
    </>
  )
}

export default Main