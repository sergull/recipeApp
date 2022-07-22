import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import styles from "./CategoryCard.style";

const CategoryCard = ({category, onSelect})=>{
    return(
        <TouchableWithoutFeedback style={styles.container} onPress={onSelect}>
            <View  style={styles.inner_container}>
                <Image
                    style={styles.image}
                    source={{uri:category.strCategoryThumb}} />

                <View style={styles.title}>
                    <Text style={styles.text}>{category.strCategory}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CategoryCard;