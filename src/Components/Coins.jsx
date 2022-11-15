import React , {useEffect, useState}from 'react'
import axios from "axios"
import {server} from "../index.js"
import { Container, HStack, VStack, Image, Heading, Text } from '@chakra-ui/react';
import Loader from './Loader.jsx';
import ErrorExchanges from './ErrorExchanges.jsx';

const Coins = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr")

  useEffect(() => {
    const fetchCoins = async() =>{
      try {
        const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        setLoading(false);
        setCoins(data);
        // console.log(data);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    fetchCoins();
  }, [currency, page]);
  
  if(error){
    return <ErrorExchanges message={"Error while fetching Coins!!"}/>
  }

  return (
    <Container maxW={"container.xl"}>
      {loading ? <Loader/> : (<>
        <HStack wrap={"wrap"}>
          {coins.map((i)=>(
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
export default Coins
