import React , {useEffect, useState}from 'react'
import axios from "axios"
import {server} from "../index.js"
import { Container, HStack,  Button, RadioGroup, Radio } from '@chakra-ui/react';
import Loader from './Loader.jsx';
import ErrorComponent from './ErrorComponent.jsx';
import CoinsCard from './CoinsCard.jsx';

const Coins = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol = currency==="inr" ? "₹" : currency==="eur" ? "€" : "$"
  const changePage = (page)=>{
    setPage(page);
    setLoading(true);
  }

  const btns = new Array(132).fill(1);

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
    return <ErrorComponent message={"Error while fetching Coins!!"}/>
  }

  return (
    <Container maxW={"container.xl"}>
      {loading ? <Loader/> : (
        <>
        <RadioGroup value={currency} onChange={setCurrency} p={'8'}>
          <HStack spacing={'4'}>
            <Radio value={"inr"}>INR</Radio>
            <Radio value={"usd"}>USD</Radio>
            <Radio value={"eur"}>EUR</Radio>
          </HStack>
        </RadioGroup>
        <HStack wrap={"wrap"} justifyContent="space-evenly">
          {coins.map((i)=>(
            <div>
              <CoinsCard 
                key={i.id}
                id={i.id}
                name={i.name}
                img={i.image} 
                price={i.current_price}
                symbol={i.symbol} 
                currencySymbol={currencySymbol}
              />
            </div>
          ))}
        </HStack>
        <HStack w={"full"} overflowX={"auto"} p={'8'} >
            {
              btns.map((item, index)=>(
                
                <Button 
                    bgColor={"blackAlpha.900"}
                    color={"white"} 
                    onClick={()=>changePage(index+1)}
                    key={index}>{index+1}
                </Button>
              ))
            }
        </HStack>
      </>
      )}
    </Container>
  )
}

export default Coins
