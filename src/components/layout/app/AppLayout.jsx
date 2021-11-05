import React from 'react'
import Container from '@mui/material/Container'
import { Header } from '../header/Header'
import { Footer } from '../footer/Footer'

export const AppLayout = (props) => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ marginTop: '15px', marginBottom: '30px' }}>
        {props.children}
      </Container>
      <Footer />
    </>
  )
}