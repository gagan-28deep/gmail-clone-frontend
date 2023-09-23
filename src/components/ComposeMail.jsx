import { Close, DeleteOutlineOutlined } from '@mui/icons-material'
import { Dialog  , Box , Typography, styled, InputBase, TextField, Button} from '@mui/material'
import React, { useState } from 'react'


const dialogStyle = {
    height : "80%",
    width : "80%",
    maxWidth : "100%",
    maxHeight : "100%",
    boxShadow : "none",
    borderRadius : '10px 10px 0 0'
}

const Header = styled(Box)({
    display : 'flex',
    justifyContent : 'space-between',
    padding : '10px 15px',
    background : '#f2f6fc',
    '& > p' : {
        fontSize : '14px',
        fontWeight : 500
    }
})

const SendButton = styled(Button)({
    background : "#1B61D1",
    color : "#fff",
    fontWeight : 500,
    borderRadius : 18,
    width : "100px",
    textTransform : 'none'
})

const Footer = styled(Box)({
    display : 'flex',
    justifyContent : 'space-between',
    padding : '10px 15px',
    alignItems   : 'center'
})

const Recipients = styled(Box)({
    display : 'flex',
    flexDirection : 'column',
    padding : '0 15px',
    '& > div' : {
        fontSize : '14px',
        borderBottom : '1px solid #F5F5F5',
        marginTop : 10
    }
})
const ComposeMail = ({openDialog , setOpenDialog}) => {
    const [data , setData] = useState({})
    const config = {
        ApiKey : "A61E7CCAC55546161E0AD87709409D4E775D53B2515BC81C1365EB0300B83C168A8D4E8C86AA44FC98DB677BFF490B7D",
        Host: 'smtp.elasticemail.com',
        Username : "gagandeep280898@gmail.com",
        Password : "95275ABE7EE0BB0E5D9C5769552B6703811B",
        Port : 2525,
        secure: false,
    }
    // Email Close
    const handleCloseEMail = async (e) =>{
        e.preventDefault()

        setOpenDialog(false)
    }
    // Send Email
    const handleSend = async (e) =>{
        e.preventDefault()

        if(window?.Email){
            window?.Email?.send({
                ...config , 
                To : data?.to,
                From : "gagandeep280898@gmail.com",
                Subject : data?.subject,
                Body : data?.body
            }).then(
              message => alert(message)
            ).catch(error => console.error(error));
        }
        setOpenDialog(false)
    }
    // Handle Value Change
    const onValueChange = async (e)=>{
        setData({...data , [e.target.name] : e.target.value })
        // console.log("111" , data)
    }
  return (
   <Dialog 
    open = {openDialog}
    PaperProps={{sx : dialogStyle}}
   >
    <Header>
        <Typography>New Message</Typography>
        <Close fontSize='small' onClick = {(e)=>{handleCloseEMail(e)}} />
    </Header>
    <Recipients>
        <InputBase placeholder='Recipeints' name='to' onChange = {(e)=>onValueChange(e)} />
        <InputBase placeholder='Subject' name='subject' onChange = {(e)=>onValueChange(e)} />
    </Recipients>
    <TextField multiline rows = {20}
        sx={{'& .MuiOutlinedInput-notchedOutline' : {border : 'none'}}}
        name='body'
        onChange = {(e)=>onValueChange(e)}
    />
    <Footer>
        <SendButton onClick={(e)=>{handleSend(e)}}>Send</SendButton>
        <DeleteOutlineOutlined onClick = {()=>setOpenDialog(false)} />
    </Footer>

   </Dialog>
  )
}

export default ComposeMail