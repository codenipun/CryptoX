import { Box, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import imgSrc from '../assets/btcimage1.png'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <Stack minH={'90vh'} direction={['column', 'row']} justifyContent={'center'} bgColor={'#f5f4f2'} alignItems={'center'}>
        <VStack justifyContent='center' alignItems={['flex-start', 'center']} p={['10', '20']}>
          <Text alignSelf={'flex-start'} fontWeight={'bold'} fontSize={'4xl'}>Explore top CryptoCurrencies <br/> With CRYPTO-X </Text>
          <Text>View crypto prices and other stats, including Bitcoin, Ethereum, XRP, and more.</Text>
        </VStack>
        <motion.div 
          animate={{
            // translateX:"20px",
            translateY:"20px",
            // translateZ:"20px"
          }}

          transition={{
            duration:1,
            repeat:Infinity,
            repeatType:"reverse"
          }}
        >
          
          <Image maxW={['400','500']} maxH={['400','500']} objectFit={'contain'} src={imgSrc} justifyContent={'center'}></Image>
        </motion.div>
    </Stack>
    
  )
}

export default Home
