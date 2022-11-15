import { Box, Container } from '@chakra-ui/react'
import React, {useState} from 'react'
import Loader from './Loader';


const CoinDetail = () => {
  
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState({});
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  return (
    <Container maxW={"container.xl"}>
      {
        loading ? <Loader/> : (
        <>
          <Box width={"full"} borderWidth={1}>
            sadfadsf
          </Box>
        </>)
      }
    </Container>
  )
}

export default CoinDetail
