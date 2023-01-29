import { Box, CircularProgress } from '@mui/material'
import React from 'react'

export const loading = () => {
  return (
  <Box sx={{display:"flex"}}>
<CircularProgress/>
  </Box>
  )
}


