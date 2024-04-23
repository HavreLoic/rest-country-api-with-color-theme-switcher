import { useEffect, useState } from "react"

export const useFetch = (url: string) => {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const data = await response.json();
            setData(data)
        }

        fetchData()

    }, [url])
    return data

}
