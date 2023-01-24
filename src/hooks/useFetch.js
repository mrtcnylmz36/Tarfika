import React, {useEffect, useState} from "react"
import axios from "axios"

function useFetch(url) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    async function fetchData() {
        try {
            const { data } = await axios.get(url)
            setLoading(false)
            setData(data)
        } catch (error) {
            setLoading(false)
            setError(error.message)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    return {data, error, loading}
}

export default useFetch