/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import News from '../../News/News/News';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData();
    return (
        <div>
            this is category: {categoryNews.length}
            {
                categoryNews.map(news=> <NewsCard news={news} key={news.id}></NewsCard> )
            }
        </div>
    );
};

export default Category;