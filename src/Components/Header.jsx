import { Box, Button, HStack, Text, Stack, color} from '@chakra-ui/react'
import React from 'react'
import {HashLink} from "react-router-hash-link"

const Header = () => {
  return (
    <Stack display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Stack w={'100%'} maxW={'1300px'} alignItems={'center'} justifyContent={'center'} h={['12vh','10vh']} px={'10'} direction={['column','row']}>
          <Text textTransform={'uppercase'}  fontFamily={'Roboto'} w={['','full']} fontSize={['2rem','3rem']} alignItems='center' ><HashLink to="/">crypto-x</HashLink></Text>
          <HStack>
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
                ><HashLink to="/news">News</HashLink></Button>
                <Text>|</Text>
              <Button px={'4'}
                css={{"&:hover":{transform:"scale(1.1)", color:'#e39f12'}}}
                variant={"unstyled"} 
                ><HashLink to="#footer">Contact us!</HashLink></Button>
          </HStack>
        </Stack>
    </Stack>
  )
}

export default Header
