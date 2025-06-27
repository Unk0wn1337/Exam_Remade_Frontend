import { useQuery } from '@tanstack/react-query'
import { getWordList } from '../word.api'

export const useGetWordList = () => {
  const {
    isLoading,
    data: wordList
  } = useQuery({
    queryKey: ['useGetWordList'],
    queryFn: async () => {
      const { wordList } = await getWordList()
      return wordList
    }
  })

  return {
    wordList,
    isLoading
  }
}
