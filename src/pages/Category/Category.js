import { View, Text, FlatList } from 'react-native';
import {API_URL} from "@env"
import CategoryCard from '../../components/CategoryCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';


const Category=({navigation})=>{

    const {error,data,loading}=useFetch(API_URL);

    const handleCategory=(strCategory)=>{
        navigation.navigate("FoodsName",{strCategory});
    }

    const renderCategory=({item})=>(
        <CategoryCard category={item} onSelect={()=>handleCategory(item.strCategory)}/>
    );

    if(loading){
        return <Loading />
    }

    if(error){
        return <Error/>
    }
  
    return(
        <View style={{backgroundColor:"#ffa000", flex:1}}>
            <FlatList data={data.categories} renderItem={renderCategory}/>

        </View>
    )
}

export default Category;