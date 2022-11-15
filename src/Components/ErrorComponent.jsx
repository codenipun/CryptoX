import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const ErrorComponent = (props) => {
  return (
    <Alert status='error' position={"fixed"} bottom={'4'} left="50%" w={"container.sm"} transform={'translateX(-50%)'} justifyContent="center">
      <AlertIcon/>
      {props.message}
    </Alert>
  )
}

export default ErrorComponent
