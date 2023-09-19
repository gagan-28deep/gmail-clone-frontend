import styled from '@emotion/styled'
import { CreateOutlined } from '@mui/icons-material'
import { Box, Button , List , ListItem } from '@mui/material'
import React , {useState} from 'react'
import {SIDEBAR_DATA} from "../config/sidebar.config.js"
import ComposeMail from './ComposeMail.jsx'


const ComposeButton = styled(Button)({
    background : '#c2e7ff',
    color : '#001d35',
    padding : 15,
     borderRadius : 16,
     textTransform : 'none',
     minWidth : 140
})

const Container = styled(Box)({
    padding : 8,
    '& > ul' : {
        padding : '10px 0  0 5px',
        cursor : 'pointer',
        fontSize : '14px',
        fontWeight : 500
    },
    '& > ul > li > svg' : {
        marginRight : 20
    }
})
const SideBarContent = () => {
    const [openDialog , setOpenDialog] = useState(false)
    const handleComposeClick = () => {
        setOpenDialog(true)
    }
  return (
    <Container>
        <ComposeButton onClick={()=>{handleComposeClick()}}>
            <CreateOutlined />Compose
        </ComposeButton>
        <List>
            {
                SIDEBAR_DATA?.map((data , key)=>(
                    <ListItem key = {key}>
                        <data.icon fontSize='small'/> {data?.title}
                    </ListItem>
                ))
            }
        </List>
        <ComposeMail openDialog = {openDialog} setOpenDialog = {setOpenDialog}/> 
    </Container>
  )
}

export default SideBarContent