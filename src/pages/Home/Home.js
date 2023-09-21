import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsCard/NewsSummaryCard';
import useTitle from '../../Hooks/UseTitle';

const Home = () => {
    const allNews=useLoaderData();
    useTitle('Home')
    return (
        <div>
           <h3> This is home{allNews.length}</h3>
           {
            allNews.map(news =><NewsSummaryCard
                key={news._id}
                news={news}
            ></NewsSummaryCard>)
           }
        </div>
    );
};

export default Home;