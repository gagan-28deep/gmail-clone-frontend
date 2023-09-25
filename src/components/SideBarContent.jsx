import styled from '@emotion/styled'
import { CreateOutlined } from '@mui/icons-material'
import { Box, Button , List , ListItem } from '@mui/material'
import React , {useState} from 'react'
import {SIDEBAR_DATA} from "../config/sidebar.config.js"
import ComposeMail from './ComposeMail.jsx'
import { NavLink, useParams } from 'react-router-dom'
import { routes } from '../routes/routes.js'


// in url
//  / ->  params and ? -> query

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
        fontWeight : 500,
        '& > a' : {
            textDecoration : 'none',
            color : 'inherit'  
        },
    },
    '& > ul > a >  li > svg' : {
        marginRight : 20
    }
})
const SideBarContent = () => {
    const [openDialog , setOpenDialog] = useState(false)
    const handleComposeClick = () => {
        setOpenDialog(true)
    }

    const {type} = useParams()
  return (
    <Container>
        <ComposeButton onClick={()=>{handleComposeClick()}}>
            <CreateOutlined />Compose
        </ComposeButton>
        <List>
            {
                SIDEBAR_DATA?.map((data)=>(
                    <NavLink  key={data?.name} to={`${routes.emails.path}/${data.name}`} >
                        <ListItem style={type === data?.name?.toLowerCase() ? {
                            background : "#d3e3fd",
                            borderRadius : '0 16px 16px 0'
                        } : {}} >
                            <data.icon fontSize='small'/> {data?.title}
                        </ListItem>
                    </NavLink>
                ))
            }
        </List>
        <ComposeMail openDialog = {openDialog} setOpenDialog = {setOpenDialog}/> 
    </Container>
  )
}

export default SideBarContent