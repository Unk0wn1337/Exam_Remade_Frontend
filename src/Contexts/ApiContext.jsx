import { createContext, useEffect, useState } from 'react'
import { AxiosConfiguration } from './AxiosConfiguration'

export const ApiContext = createContext('')

export const ApiProvider = ({ children }) => {
  const [wordList, setWordList] = useState([])

  const GET = async (endpoint, callbackFunction) => {
    try {
      const response = await AxiosConfiguration.get(endpoint)
      callbackFunction(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    GET('/index', setWordList)
  }, [])

  return <ApiContext.Provider value={{ wordList }}>{children}</ApiContext.Provider>
}
