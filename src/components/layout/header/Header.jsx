import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import TheatersIcon from '@mui/icons-material/Theaters'
import Typography from  '@mui/material/Typography'

export const Header = function (props) {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#141414' }}>
      <Toolbar>
        <Container maxWidth="lg">
          <Box component="span" sx={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
            <TheatersIcon fontSize="large" />
            <Typography component="p" sx={{ fontSize: '24px' }}>Cimematic</Typography>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  )
}