import { Avatar, Box, Stack, VStack, Text, Heading, Button, Input, HStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from'react-icons/ai'
const Footer = () => {
  return (
    <div>
      {/* <Box bgColor={"blackAlpha.900"}
      color="white"
      minH={'48'}
      px='16'
      py={['16', '8']}>

      <Stack direction={["column", "row"]}
      alignItems='center' h={'full'}>

        <VStack w='full' alignItems={['center', 'flex-start']}>
            <Text>
                cryptoX
            </Text>
            <Text>
                The best crypto trading app in India. We provide guidance at a very reasonable price.
            </Text>
        </VStack>
        <VStack>
            <Avatar boxSize={'28'} mt={['4', '0']}></Avatar>
            <Text>Our Founder</Text>
        </VStack>

      </Stack>

      </Box> */}
      <Stack direction={['column', 'row']} minH={'40'} p='16' color={'white'} bgColor={"blackAlpha.900"}>
            <VStack w={'full'} 
            alignItems="stretch">
                <Heading textAlign={['center', 'left']}>
                    Subscribe to our Newsletter
                </Heading>
                <HStack borderBottom={'2px solid white'}>
                    <Input placeholder="Enter your Email here..." border={'none'}
                        borderRadius="none"
                        outline={'none'}
                        focusBorderColor='none'
                    />
                    <Button colorScheme={'purple'}
                            variant={'unstyled'}
                            color="silver"
                            borderRadius={"0 20px 20px 0"}>
                        <AiOutlineSend size={20}></AiOutlineSend>
                    </Button>
                </HStack>
            </VStack>
            <VStack w='full' borderLeft={['none', '1px solid white']} borderRight={['none', '1px solid white']}>
                <Heading
                    textAlign={'center'}
                    textTransform={'uppercase'}
                    fontFamily={'Rajdhani'}
                >crypto-X</Heading>
                <Text color={'silver'}>&copy; All Rights Reserved</Text>
            </VStack>
            <VStack w='full'>
                <Heading
                    size={'md'}  
                    textTransform={'uppercase'}
                >Social media</Heading>

                <Button
                    variant={'link'} color={'silver'}
                >
                <a target={'blank'} href="https://youtube.com">Youtube</a>
                </Button>

                <Button
                    variant={'link'} color='silver'
                >
                <a target={'blank'} href="https://facebook.com">Facebook</a>
                </Button>

                <Button
                    variant={'link'} color='silver'
                >
                <a target={'blank'} href="https://Instagram.com">Instagram</a>
                </Button>

            </VStack>
        </Stack>
    </div>
  )
}

export default Footer
