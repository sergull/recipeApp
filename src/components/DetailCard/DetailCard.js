import React from 'react';
import { View,Text,Image, Button, Linking } from 'react-native'
import styles from "./DetailCard.style";

const DetailCard =({item})=>{

    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:item.strMealThumb}}/>
            <View style={styles.inner_container}>
                <Text style={styles.meal}>{item.strMeal}</Text>
                <Text style={styles.area}>{item.strArea}</Text>
                <Text style={styles.instructions}>{item.strInstructions}</Text>
            </View>

            <View  style={styles.button} >
                <Button color={"white"} title='Watch On Youtube' onPress={()=>Linking.openURL(item.strYoutube)} />
            </View>
        </View>
    )
}

export default DetailCard;
