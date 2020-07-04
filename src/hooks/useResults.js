import {useState, useEffect} from 'react'
import yelp from '../api/yelp'

export default ()=>{
    const [results, setResults] = useState([])
    const [errorMessage, setError] = useState('')

    const searchApi = async (searchTerm)=>{
        // console.log('ONCE')
        try{
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            })
            setResults(response.data.businesses)
        } catch(err) {
            console.log(err)
            setError('Something went wrong')
        }
    }

    useEffect(()=>{
        searchApi('BBQ')
    }, [])

    return [searchApi, results, errorMessage]
}