import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:{
        margin:8
    },
    inner_container:{
        backgroundColor:"#eeeeee",
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
        borderRadius:5,
        flexDirection:"row",
        margin:5
    },
    image:{
        height:100,
        width:100,
        resizeMode:"contain",
        
    },

    title:{
        alignSelf:"center",
        marginLeft:25,
    },

    text:{
        fontSize:25
    }

    
})