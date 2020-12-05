import React, { useState, useEffect } from 'react';
import axios from 'axios';
import News from './News';
import './AllNews.css';

function AllNews(props) {
   const [Load, setLoad] = useState(true);
   const [news, setnews] = useState([]);

   useEffect(() => {
      getNews();
   }, []);

   //Api call using axios
   const getNews = async () => {
      try {
         const newsapi = await axios.get('https://hubblesite.org/api/v3/news');
         setnews(newsapi.data);
         console.log(newsapi.data);
         setLoad(false);
      } catch (e) {
         alert(e);
         setLoad(false);
         window.location.reload(false);
      }
   };

   // set loading
   if (Load) {
      return (
         <div style={{ paddingTop: '200px' }}>
            <div className="JokeList-spinner">
               <i className="far fa-8x fa-laugh fa-spin"></i>
               <h1 className="JokeList-title">Loading...</h1>
            </div>
         </div>
      );
   } else {
      return (
         <div className="main">
            <div className="container">
               <h1>List Of Articles</h1>
               <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {news.map((news) => (
                     <div
                        style={{
                           width: '280px',
                           display: 'flex',
                           flexWrap: 'wrap',
                           margin: '20px 50px',
                           height: '200px',
                        }}
                     >
                        {' '}
                        <News
                           key={news.news_id}
                           id={news.news_id}
                           author={news.author}
                           title={news.name}
                           description={news.url}
                        />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      );
   }
}

export default AllNews;
