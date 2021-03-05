import useSWR from 'swr'
import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

export function useFetch<Data = any, Error = any>(url: string, params?: any) {
  const { data, error, revalidate, isValidating, mutate } = useSWR<Data, Error>(
    url,
    async (url) => {
      const response = await api.get(url, { params: { ...params } })

      return response.data
    }
  )

  return { data, error, revalidate, isValidating, mutate }
}
