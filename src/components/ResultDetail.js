import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'

const ResultDetail = ({results})=>{
    return(
        <View style={Styles.container}>
            <Image source={{uri: results.image_url}} style={Styles.image} />
            <Text style={Styles.name}>{results.name}</Text>
            <Text>{results.rating} Stars, {results.review_count} Reviews</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    image:{
        width: 270,
        borderRadius: 4,
        height: 200,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
    },
    container: {
        marginLeft: 15,
    }
})

export {ResultDetail}