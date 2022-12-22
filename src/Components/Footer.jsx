import { Avatar, Box, Stack, VStack, Text, Heading, Button, Input, HStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from'react-icons/ai'
const Footer = () => {
  return (
    <div id='footer'>
      <Stack direction={['column', 'row']} minH={'40'} px='16' py={'4'} >
            <VStack w={'full'} 
            alignItems="stretch">
                <Heading textAlign={['center', 'left']} fontFamily='Rajdhani'>
                    Contact Us
                </Heading>
                <HStack borderBottom={'2px solid orange'} w={'30vh'}>
                    <Input placeholder="Name" border={'none'}
                        borderRadius="none"
                        outline={''}
                        focusBorderColor='none'
                    />
                </HStack>
                <HStack borderBottom={'2px solid orange'} w={'30vh'}>
                    <Input placeholder="Email" border={'none'}
                        borderRadius="none"
                        outline={''}
                        focusBorderColor='none'
                    />
                </HStack>
                <HStack borderBottom={'2px solid orange'} w={'30vh'}>
                    <Input placeholder="Query" border={'none'}
                        borderRadius="none"
                        outline={''}
                        focusBorderColor='none'
                    />
                </HStack>
                <Button w={'30vh'} colorScheme={'orange'}
                            variant={'solid'}
                            borderRadius={"20px"}> Send
                    </Button>
            </VStack>
            <VStack w='full' borderLeft={['none', '1px solid white']} borderRight={['none', '1px solid white']} alignItems={['', 'center']}>
                <Heading
                    textAlign={'center'}
                    textTransform={'uppercase'}
                    fontFamily={'Rajdhani'}
                >crypto-X</Heading>
                <Text fontSize={'15'} fontWeight={'thin'}>Made with ❤️ by <a className='gitAcc' href='https://www.github.com/codenipun'>codenipun</a></Text>
            </VStack>
            <VStack w='full'>
                <Heading
                    size={'md'}  
                    textTransform={'uppercase'}
                >Social media</Heading>

                <Stack direction={['row', 'column']} >
                <Button
                    variant={'link'} color={'orange'} 
                >
                <a target={'blank'} href="https://youtube.com">Youtube</a>
                </Button>

                <Button
                    variant={'link'} color='orange'
                >
                <a target={'blank'} href="https://facebook.com">Facebook</a>
                </Button>

                <Button
                    variant={'link'} color='orange'
                >
                <a target={'blank'} href="https://Instagram.com">Instagram</a>
                </Button>
                </Stack>

            </VStack>
        </Stack>
    </div>
  )
}

export default Footer
