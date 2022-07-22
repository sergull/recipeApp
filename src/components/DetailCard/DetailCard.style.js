import React from 'react';
import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:{
        backgroundColor:"#fffde7",
        flex:1,

    },
    image:{
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").height/2.2,
    },
    inner_container:{
        padding:7
    },
    meal:{
        fontSize:32,
        color:"#e65100",
        fontWeight:"bold"
    },
    area:{
        fontSize:25,
        color:"#e65100",
        fontWeight:"bold",
        marginBottom:5
    },
    instructions:{
        fontSize:18,
        
    },
    button:{
        margin:10,
        borderRadius:5,
        color:"white",
        backgroundColor:"red"
    }

});