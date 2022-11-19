import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import imgSrc from '../assets/btcimage1.png'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <Box w='full' h={['85vh', '85vh']} display={'flex'} justifyContent='center' alignItems={'center'} bgColor={'blackAlpha.900'}>
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
        <Image maxW={['400','600']} maxH={['400','600']} objectFit={'contain'} src={imgSrc}></Image>
      </motion.div>
    </Box>
  )
}

export default Home
