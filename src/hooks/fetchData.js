import { useEffect, useState } from 'react';
import axios from 'axios'
import useLocalStorage from '../useLocalStorage'

export default function FetchData() {

  const [movieSearch, setSearch] = useState('')
  const [results, setResults] = useState([])
  const [nominations, setNominations] = useLocalStorage('nominations', {})
  const [isLoading, setLoading] = useState(false)
  const [toggle, setToggle] = useLocalStorage('toggle', false)
  const [nominNum, setNominNum] = useLocalStorage('nominNum', 0)

  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?apikey=d5633076&s=${movieSearch}`).then(res => {
      setTimeout(() => {
        setLoading(false)
        setResults(res.data.Search)
      }, 400)
    })
  }, [movieSearch])
  return {
    results, setResults, movieSearch, setSearch, isLoading, setLoading, nominations, setNominations, toggle, setToggle, nominNum, setNominNum
  }
}