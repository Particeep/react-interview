import { Card, Grid, Text } from '@nextui-org/react'
import React from 'react'

function Error({error}) {
  return (
    <Grid css={{ display: "flex", justifyContent: "center", alignItems: "center", h: "80vh" }}>
    <Card color="error" css={{ bgBlur: "$backgroundContrast" }}>
      <Card.Header>
        <Text color="error" size="lg">
          Error
        </Text>
      </Card.Header>
      <Card.Body>
        <Text h6 size={15} color="white">
          {error}
        </Text>
      </Card.Body>
    </Card>
  </Grid>
  )
}

export default Error