import { useEffect, useState } from 'react'
import { Coffee } from './types'

const useFetch = () => {
  const [data, setData] = useState<Coffee[]>([])

  const APIurl = 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'

  useEffect(() => {
    fetch(APIurl)
      .then((res) => res.json())
      .then((data: Coffee[]) => {
        setData(data)
      })
  }, [])

  return data
}

export { useFetch, type Coffee }
