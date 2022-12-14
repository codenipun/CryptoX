import { Container, Heading, HStack, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ErrorComponent from './ErrorComponent';
import Loader from './Loader';
import NewsCard from './NewsCard';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowTrendUp} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const CryptoNews = ({simplified}) => {
    const [loading, setLoading] = useState(true);
  const [coinsNews, setCoinsNews] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  

  useEffect(() => {
    const options = {
        method: 'GET',
        url: 'https://bing-news-search1.p.rapidapi.com/news/search',
        params: {q: 'Cryptocurrencies', count: simplified ? 8 : 39, freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off'},
        headers: {
          'X-BingApis-SDK': 'true',
          'X-RapidAPI-Key': '5e54334c51msh6ecd5f485093597p10b84bjsn3c45f4caea72',
          'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
      };
    const fetchCoins = async() =>{
      try {
        axios.request(options).then(function (response) {
            console.log(response.data.value);
            setLoading(false);
            setCoinsNews(response.data.value);
        });
        
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    fetchCoins();
  }, [page]);

  if(error){
    return <ErrorComponent message={"Error while fetching Coins News!!"}/>
  }
  return (

    <div className='news'>
      {loading ? <Loader/> : (
        <>
            <div className='cryptoNews'>
                <div className="heading">
                    <Text>Top Crypto News</Text>
                </div>
                <div className="newsContainer">
                    {coinsNews.map((i,j)=>(
                        <div key={j}>
                        <NewsCard
                            simplified={simplified} 
                            title={i.name}
                            desc={i.description} 
                            provider={i.provider[0]?.name}
                            date={i.datePublished} 
                            img={i.image?.thumbnail?.contentUrl}
                            url={i.url}
                            providerimg = {i.provider[0]?.image?.thumbnail?.contentUrl}
                        />
                        </div>
                    ))}
                    {simplified && <div className='moreNews'>
                    <Link to={'/news'}>
                        <FontAwesomeIcon icon={faArrowTrendUp} className={'more'} />
                        <Text>more News...</Text>
                    </Link>
                    </div>}
                </div>
            </div>
        </>
      )}
    </div>
  )
}

export default CryptoNews
