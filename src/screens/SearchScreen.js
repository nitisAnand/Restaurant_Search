import React, {useState} from 'react'
import {View, Text} from 'react-native'
import {Searchbar} from '../components'
import yelp from '../api/yelp'

const SearchScreen = ()=>{

    const [term, setTerm] = useState('')
    const [results, setResults] = useState('')

    const searchApi = async ()=>{
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term,
                location: 'san jose'
            }
        })
            .then(()=>{
                setResults(response.data.businesses)
            })
            .catch((error)=>{
                console.log(error)
            })
        
    }

    return(
        <View>
            <Searchbar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={searchApi}
            />
            <Text>SearchScreen</Text>
            <Text>We have {results.length} results</Text>
        </View>
    )
}

export {SearchScreen}