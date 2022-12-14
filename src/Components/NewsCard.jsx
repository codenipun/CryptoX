import { Heading, VStack, Text, Image, HStack, Avatar } from '@chakra-ui/react'
import React from 'react'
import imgsrc from '../assets/crypto.jpg'

import { Link } from 'react-router-dom'
import { isMotionComponent } from 'framer-motion'
import moment from 'moment'

const NewsCard = ({title, desc, provider, date, img, url, providerimg, simplified}) => {
  return (
      <div className="newsCard">
    <a href={url} target={"blank"}>
            <div className="titleimg">
                <Text className='title'>{title}</Text>
                <img className='newsImage' src={img} alt=''/>
            </div>
            <div className="desc">
                {desc}
            </div>
            <div className="provider-date">
                <div className="provider">
                    <img className='providerimg' src={providerimg} alt=''/>
                    <Text className='providertext'>{provider}</Text>
                </div>
                <Text className='date'>{moment(date).startOf('ss').fromNow()}</Text>
            </div>
    </a>
    
        </div>
        
  )
}

export default NewsCard