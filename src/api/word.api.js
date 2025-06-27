import { AxiosConfiguration } from './AxiosConfiguration'

export const getWordList = async () => {
  const { data: wordList } = await AxiosConfiguration.get('/index')
  return { wordList }
}
