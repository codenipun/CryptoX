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

  let limit = 100;
  if(simplified){
    limit = 10;
  }
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://real-time-news-data.p.rapidapi.com/search',
      params: {query: 'Cryptocurrencies,crypto', country: 'US', lang: 'en'},
      headers: {
        'X-RapidAPI-Key': '5e54334c51msh6ecd5f485093597p10b84bjsn3c45f4caea72',
        'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com'
      }
    };
    const fetchCoins = async() =>{
      try {
        axios.request(options).then(function (response) {
            console.log(response.data.data);
            setLoading(false);
            setCoinsNews(response.data.data);
        });

        // const response = await axios.get('https://newsdata.io/api/1/news?apikey=pub_14554f784f469f932d5abfd8ddd94f8f93b5f&q=crypto');
        // console.log(response.data.results);
        // setLoading(false);
        // setCoinsNews(response.data.results);
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
                        j<limit && (<div key={j}>
                        
                        <NewsCard
                            simplified={simplified} 
                            title={i.title}
                            // desc={i.description} 
                            // provider={i.creator[0]}
                            date={i.published_datetime_utc} 
                            img={i.photo_url}
                            url={i.link}
                            providerimg = {i.source_logo_url}
                        />
                        </div>)
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