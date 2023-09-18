import React from 'react'
import {AppBar , Toolbar , styled , InputBase, Box} from "@mui/material"
import { Menu as MenuIcon , Search , Tune , HelpOutlineOutlined ,
Settings , AppsOutageOutlined, AccountCircleOutlined } from "@mui/icons-material"
import { gmailLogo } from '../constatns/constants'

const StyledAppBar = styled(AppBar)({
  background : '#F5F5F5',
  boxShadow : 'none'
})

const BoxWrapper = styled(Box)({
  display : 'flex',
  justifyContent : 'space-between',
  alignItems : 'center',
  background : '#EAF1FB',
  marginLeft : 80,
  borderRadius : 8,
  minWidth : 690,
  maxWidth : 720,
  height : 48,
  padding : '0 20px',
  '& > div' : {
    width : '100%',
    padding : '0 10px'
  }

})

const OptionWrapper = styled(Box)({
  width : '100%',
  display : 'flex',
  justifyContent : 'flex-end',
  gap : '10px'
  // The below code is same as gap.
  
  // '& > svg' : {
  //   margin : '10px'
  // }
})
const Header = ({handleToggle}) => {
  return (
   <StyledAppBar position='static'>
      <Toolbar>
        <MenuIcon color='action' onClick = {handleToggle}/>
        <img src={gmailLogo} alt="Gmail Logo"  style={{width : 110 , marginLeft : 15}}/>
        <BoxWrapper>
          <Search color='action'/>
          <InputBase placeholder='Search Mail'/>
          <Tune color='action'/>
      </BoxWrapper>
      <OptionWrapper>
        <HelpOutlineOutlined color='action'/>
        <Settings color='action'/>
        <AppsOutageOutlined color='action' />
        <AccountCircleOutlined color='action' />
      </OptionWrapper>
      </Toolbar>
   </StyledAppBar>
  )
}

export default Header