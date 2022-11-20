import { Box, Button, HStack, Text, Stack, color} from '@chakra-ui/react'
import React from 'react'
import {HashLink} from "react-router-hash-link"

const Header = () => {
  return (
    <Stack alignItems={'center'} justifyContent={'center'} h={['12vh','10vh']} position={'sticky'} px={'10'} shadow={'base'} direction={['column','row']}>
        <Text textTransform={'uppercase'}  fontFamily={'Rajdhani'} w={['','full']} fontSize={['2rem','3rem']} alignItems='center' >crypto-x</Text>
        <HStack >
            <Button
              css={{"&:hover":{transform:"scale(1.1)", color:'#e39f12'}}}
              variant={"unstyled"} 
              ><HashLink to="/">Home</HashLink></Button>
              <Text>|</Text>
            <Button mx={'10'}
              css={{"&:hover":{transform:"scale(1.1)", color:'#e39f12'}}}
              variant={"unstyled"} 
              ><HashLink to="/coins">Coins</HashLink></Button>
              <Text>|</Text>
            <Button px={'4'}
              css={{"&:hover":{transform:"scale(1.1)", color:'#e39f12'}}}
              variant={"unstyled"} 
              ><HashLink to="/exchanges">Exchanges</HashLink></Button>
              <Text>|</Text>
            <Button px={'4'}
              css={{"&:hover":{transform:"scale(1.1)", color:'#e39f12'}}}
              variant={"unstyled"} 
              ><HashLink to="#footer">Contact us!</HashLink></Button>
        </HStack>
    </Stack>
  )
}

export default Header
