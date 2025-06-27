import { AxiosConfiguration } from './AxiosConfiguration'

export const getWordList = async () => {
  const { data: wordList } = AxiosConfiguration.get('/index')
  return { wordList }
}
