import React from 'react';
import { View, Text,FlatList } from 'react-native'
import useFetch from '../../hooks/useFetch/useFetch';
import {API_DETAIL} from "@env"
import DetailCard from '../../components/DetailCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Detail = ({route}) => {
  const {idMeal} = route.params;
  const url=`${API_DETAIL}=${idMeal}`;
  const {loading, error, data} = useFetch(url);

  const renderDetailCard = ({item}) => {
    return <DetailCard item={item} />;
  };

  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }
  return (
        <FlatList
        data={data.meals}
        renderItem={renderDetailCard}
        keyExtractor={item => item.idMeal}
        />
  );
};

export default Detail;