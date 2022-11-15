import React , {useEffect, useState}from 'react'
import axios from "axios"
import {server} from "../index.js"
import { Container, HStack, VStack, Image, Heading, Text } from '@chakra-ui/react';
import Loader from './Loader.jsx';
import ErrorComponent from './ErrorComponent.jsx';

const Exchanges = () => {
  const [loading, setLoading] = useState(true);
  const [exchanges, setExchanges] = useState([]);
  const [error, setError] = useState(false)
  useEffect(() => {
    const fetchExchanges = async() =>{
      try {
        const {data} = await axios.get(`${server}/exchanges`);
        setLoading(false);
        setExchanges(data);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    fetchExchanges();
  }, []);
  
  if(error){
    return <ErrorComponent message={"Error while fetching exchanges!!"}/>
  }

  return (
    <Container maxW={"container.xl"}>
      {loading ? <Loader/> : (<>
        <HStack wrap={"wrap"} justifyContent="space-evenly">
          {exchanges.map((i)=>(
            <div>
              <ExchangeCard 
              key={i.id}
              name={i.name}
              pic={i.image} 
              url={i.url} 
              rank={i.trust_score_rank} />
            </div>
          ))}
        </HStack>
      </>
      )}
    </Container>
  )
}
const ExchangeCard=({name, url, rank, pic})=>(
    <a href={url} target={"blank"}>

      <VStack w={"52"} shadow={'lg'} p={'8'} transition={"all 0.3s"}
        borderRadius={'lg'} m={'4'} css={{
          "&:hover":{transform:"scale(1.3)"}
        }}
      >
        <Image src={pic} w={'10'} h={'10'} objectFit={'contain'}></Image>
        <Heading size={'md'} noOfLines={1}>{rank}</Heading>
        <Text noOfLines={1}>{name}</Text>
      </VStack>
    </a> 
);
export default Exchanges
