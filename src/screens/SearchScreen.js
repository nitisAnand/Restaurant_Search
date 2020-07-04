import React, {useState} from 'react'
import {Text, ScrollView} from 'react-native'
import {Searchbar} from '../components'
import ResultList from '../components/ResultList'
import useResults from '../hooks/useResults'

const SearchScreen = ()=>{

    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    const filterResultsByPrice = (price)=>{
         return results.filter(result => {
             return result.price === price
         })
    }

    return(
        <>
            <Searchbar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={()=> searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            
            <ScrollView>
                <ResultList
                    results = {filterResultsByPrice('$')}
                    title='Cost effective'
                />
                <ResultList
                    results = {filterResultsByPrice('$$')}
                    title='Bit Pricy'
                />
                <ResultList
                    results = {filterResultsByPrice('$$$')}
                    title='Big Spender'
                />
            </ScrollView>
        </>
    )
}

export {SearchScreen}