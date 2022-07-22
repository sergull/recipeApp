import React from "react";
import { View, Text, FlatList } from "react-native";
import Loading from "../../components/Loading";
import useFetch from "../../hooks/useFetch/useFetch";
import Error from "../../components/Error";
import { API_FOODS } from "@env";
import FoodListCard from "../../components/FoodLİstCard/FoodListCard";


const FoodList = ({ route, navigation }) => {
  const {strCategory} = route.params;
  const url = `${API_FOODS}=${strCategory}`;

  const {data, loading, error} = useFetch(url);

  handleDetail=(idMeal)=>{
    navigation.navigate("Details",{idMeal});
  }

  
  const renderFoods = ({ item }) => <FoodListCard food={item} onSelect={()=>handleDetail(item.idMeal)}/>;

  if (loading) {
    <Loading />;
  }

  if (error) {
    <Error />;
  }
  return (
    <View  style={{backgroundColor:"#ffa000", flex:1}}>
      <FlatList data={data.meals} renderItem={renderFoods} />
    </View>
  );
};

export default FoodList;
