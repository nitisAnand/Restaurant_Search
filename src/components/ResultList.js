import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import {ResultDetail} from '../components'
import {withNavigation} from 'react-navigation'

const ResultList = ({results, title, navigation})=>{
    if(!results.length)
    {
        return null
    }
    
    return(
        <View style={Styles.container}>
            <Text style={Styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={result=> result.id}
                renderItem={({item})=>{
                    return(
                    <TouchableOpacity onPress={()=> navigation.navigate('ResultShow', {id: item.id})}>
                        <ResultDetail results={item}/>
                    </TouchableOpacity>)
                }}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const Styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default withNavigation(ResultList)