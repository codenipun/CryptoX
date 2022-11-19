import { Box, Button, HStack, Text, Stack, color} from '@chakra-ui/react'
import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <Stack position={'sticky'} p={'4'} shadow={'base'} bgColor={'blackAlpha.900'} direction={'row'}>
        <Text textTransform={'uppercase'} color='white' fontFamily={'Rajdhani'} w={'full'} fontSize={['2rem','3rem']} alignItems='center'>crypto-x</Text>
        <HStack >
            <Button 
              css={{"&:hover":{transform:"scale(1.1)", color:'white'}}}
              variant={"unstyled"} 
              color={'silver'}
              ><Link to="/">Home</Link></Button>
            <Button 
              css={{"&:hover":{transform:"scale(1.1)", color:'white'}}}
              variant={"unstyled"} 
              color={'silver'}
              ><Link to="/coins">Coins</Link></Button>
            <Button 
              css={{"&:hover":{transform:"scale(1.1)", color:'white'}}}
              variant={"unstyled"} 
              color={'silver'}
              ><Link to="/exchanges">Exchanges</Link></Button>
        </HStack>
    </Stack>
  )
}

export default Header
