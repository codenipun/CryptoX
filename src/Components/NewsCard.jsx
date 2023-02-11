import { Heading, VStack, Text, Image, HStack, Avatar } from '@chakra-ui/react'
import React from 'react'
import imgsrc from '../assets/crypto.jpg'

import { Link } from 'react-router-dom'
import { isMotionComponent } from 'framer-motion'
import moment from 'moment'

const NewsCard = ({title, desc, provider, date, img, url, providerimg, simplified}) => {
    const images = [
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/bitcoinreuters_13072022.jpg?VersionId=IOd.5O9.N7AwoFQWBsc6XxrQkbrhy9U4&size=690:388",
        "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1670500990.jpg",
        "https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/PJTR3KRDWJCRVE3QREM6KUOK7A.png",
        "https://ichef.bbci.co.uk/news/976/cpsprodpb/DECC/production/_128263075_crypto_currency_getty.jpg.webp",
        "https://www.investopedia.com/thmb/XsT78eXSXfqdt-lYLJtYha6gETk=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/INV_CryptoCoinImage_17_WeekofJan302023-2f880fef219543f38e5135e8ff393872.jpg"
    ]
    // console.log(img);
    if(img===null){
        let randomNumber = getRandomNumber(0, 4);
        img = images[randomNumber];
    }
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
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default NewsCard