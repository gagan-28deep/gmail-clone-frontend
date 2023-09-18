import React , {useState} from 'react'
import {Drawer , styled} from "@mui/material"
import SideBarContent from './SideBarContent'
const SideBar = ({open}) => {
  return (
    <Drawer
      anchor='left'
      open = {open}
      hideBackdrop = {true}
      ModalProps={{
        keepMounted : true
      }}
      variant='persistent'
      sx={{
        '& .MuiDrawer-paper' : {
          marginTop : '64px',
          width : 250,
          height : 'calc(100vh - 64px)',
          borderRight : 'none',
          background : '#F5F5F5'
        }
      }}
    >
      <SideBarContent />
    </Drawer>
  )
}

export default SideBar