import { Box, Typography } from '@mui/material'
import React from 'react'
import { useRouteError } from 'react-router-dom'
const ErrorComp = () => {
    const error = useRouteError()
    console.log("Error -> " , error);
  return (
    <Box style = {{marginLeft : 250}} >
        <Typography>
            There was an Error while loading the page...
        </Typography>
    </Box>
  )
}

export default ErrorComp