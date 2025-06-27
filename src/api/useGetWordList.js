import { useQuery } from '@tanstack/react-query'
import { getWordList } from './word.api'

export const useGetWordList = () => {
  const {
    isPending,
    error,
    data: wordList
  } = useQuery({
    queryKey: ['repoData'],
    queryFn: async () => {
      const { wordList } = await getWordList()
      return wordList
    }
  })

  return {
    wordList
  }
}
