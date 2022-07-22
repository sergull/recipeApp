import React from 'react';
import { View,Text,TouchableWithoutFeedback, Image } from 'react-native';
import styles from "./FoodListCard.style"

const FoodListCard=({food,onSelect})=>{

    return(
        <TouchableWithoutFeedback style={styles.container} onPress={onSelect}>
            <View style={styles.inner_container}>
                <Image style={styles.image} source={{uri:food.strMealThumb}}/>
                <View style={styles.title}>
                    <Text style={styles.text}>{food.strMeal}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )

}

export default FoodListCard;