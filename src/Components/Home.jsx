import { Box, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import imgSrc from '../assets/btcimage1.png'
import {motion} from 'framer-motion'
import NewsCard from './NewsCard'
import CryptoNews from './CryptoNews'

const Home = () => {
  return (
    <VStack bgColor={'#f5f4f2'} >
<Stack minH={'90vh'} direction={['column', 'row']} justifyContent={'center'}  alignItems={'center'} className='mainContainer'>
        <VStack justifyContent='center' alignItems={['flex-start', 'center']} p={['10', '20']}>
          <Text alignSelf={'flex-start'} fontWeight={'bold'} fontSize={'4xl'}>Explore top CryptoCurrencies <br/> With CRYPTO-X </Text>
          <Text>View Crypto prices, News and other stats, including Bitcoin, Ethereum, XRP, and more.</Text>
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
    <CryptoNews simplified={true}/>
    </VStack>
    
    
  )
}

export default Home
