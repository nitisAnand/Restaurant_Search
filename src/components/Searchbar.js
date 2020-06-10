import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'
import {Feather} from '@expo/vector-icons'

const Searchbar = ({term, onTermChange, onTermSubmit})=>{
    return(
        <View style={Styles.backgroundStyle}>
            <Feather name='search' style={Styles.iconStyle}/>
            <TextInput
                placeholder='Search'
                style={Styles.inputStyle}
                value={term}
                onChangeText={onTermChange}
                autoCorrect={false}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const Styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#E1DFDF',
        height: 35,
        borderRadius: 5,
        marginHorizontal:15,
        flexDirection: 'row',
        marginTop: 15
    },
    inputStyle: {
        borderColor: 'black',
        flex: 1,
        fontSize: 18    
    },
    iconStyle: {
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 10
    }
})

export {Searchbar}